import React, { useState, useRef } from 'react'
import axios from 'axios'
import { message } from 'antd'
import { debounce } from 'lodash'

import { Form } from '@unform/web'
import * as S from './styles'

import api from '../../../api'
import Input from '../../../shared/components/Form/Input'
import { FormItem } from '../../../shared/components/Form/styles'

const FormLink = ({ setId }) => {
    const formRef = useRef(null)

    const [preview, setPreview] = useState("")
    const [linkStatus, setLinkStatus] = useState(null)

    function handleChangeLink(link) {
        if (link) {
            formRef.current.setFieldValue('link',
                link.split(' ')
                    .join('-')
                    .toLowerCase()
                    .replace(/[^a-z 0-9 -]/g, ''))

            setPreview(link)
        }
    }

    async function handleLink(link) {
        setLinkStatus('validating')

        if (link) {
            const newLink = link.split(' ').join('-').toLowerCase()
            const res = await api.post('/verify', { link: newLink })

            if (res) {
                setLinkStatus(res.data ? 'success' : handleErrorLink('Este link já está sendo utilizado'))
            }
        } else {
            handleErrorLink('Informe um link para te encontrarem')
            setLinkStatus(null)
        }
    }

    function handleErrorLink(msg) {
        formRef.current.setFieldError('link', msg)
    }

    async function handleSubmit(data, { reset }) {
        const localData = JSON.parse(localStorage.getItem('sendwhats_user'))
        const idUser = localData.id_usuario

        const res = await api.post(`/contacts`, { ...data, id_user: idUser })

        if (res) {
            console.log(res.data.id)
            async function hookDeploy() {
                const response = await axios.post('https://api.netlify.com/build_hooks/5ea0e1c7e0f86b4ff29b8349').catch(e => {
                    console.log('Falha ao realizar deploy')
                })

                if (response) {
                    message.success(res.data.message)

                    reset()
                    setId(res.data.id)
                }
            }

            hookDeploy()
        }
    }

    const linkDebounce = useRef(
        debounce(e => {
            handleLink(e)
        }, 500)
    ).current

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <FormItem>
                <Input
                    name="link"
                    type="text"
                    label="Link para acessar seu contato"
                    placeholder="Digite o link que irão te encontrar"
                    onChange={e => {
                        linkDebounce(e.target.value)
                        handleChangeLink(e.target.value)
                    }}
                    validate={linkStatus}
                />
                <S.PreviewLink>{`https://sendwhats.me/${preview}`}</S.PreviewLink>
            </FormItem>
            <FormItem>
                <S.ActionButton
                    type="primary"
                    htmlType="submit"
                    size="large" block>
                    Criar Link
                </S.ActionButton>
            </FormItem>
        </Form>
    )
}

export default FormLink