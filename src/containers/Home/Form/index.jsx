import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Button, message, Drawer, PageHeader, Spin } from 'antd'
import { debounce } from 'lodash'

import FormLink from './FormLink'
import { Form } from '@unform/web'
import { FormItem } from '../../../shared/components/Form/styles'

import * as S from './styles'

import api from '../../../api'
import Input from '../../../shared/components/Form/Input'
import InputMask from '../../../shared/components/Form/InputMask'
import TextArea from '../../../shared/components/Form/TextArea'
import { LoadingOutlined } from '@ant-design/icons'

const Home = ({ id, visible, handleDrawer }) => {

    const formRef = useRef(null)

    const [contactData, setContactData] = useState({})
    const [linkStatus, setLinkStatus] = useState(null)
    const [preview, setPreview] = useState("")
    const [loading, setLoading] = useState(false)
    const [newId, setNewId] = useState(null)

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    useEffect(() => {
        if (id || newId) {
            getContactById(id || newId)
        }
    }, [id, newId])

    async function getContactById(id) {
        setLoading(true)

        if (id) {
            const res = await api.get(`contacts/${id}`).catch(err => {
                console.log('erro', err)
            })

            if (res) {
                const [data] = res.data
                
                console.log(formRef)
                console.log(formRef.current)
                formRef.current.setData(data)

                if (newId) {

                } else {
                    setContactData({ id: data.id, title: data.title })
                }

                setLoading(false)
            }
        }
    }

    async function handleSubmit(data, { reset }) {
        const localData = JSON.parse(localStorage.getItem('sendwhats_user'))
        const idUser = localData.id_usuario
        const nameUser = localData.name

        const method = id ? 'patch' : 'post'

        const res = await api[method](`/contacts/${method === 'patch' ? id : ''}`, { ...data, id_user: idUser, name: nameUser })

        if (res) {
            axios.post('https://api.netlify.com/build_hooks/5ea0e1c7e0f86b4ff29b8349')

            message.success(res.data.message)

            reset()
            handleDrawer({ visible: false })
        }
    }

    function handleErrorLink(msg) {
        formRef.current.setFieldError('link', msg)
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

    async function deleteContact(id) {
        setLoading(true)

        if (id) {
            const res = await api.delete(`contacts/${id}`).catch(err => {
                message.error(err.response.message)
            })

            if (res) {
                setLoading(false)

                message.success(res.data.message)

                handleDrawer({ visible: false })
            }
        } else {
            setLoading(false)
            message.error("Id não encontrado")
        }
    }

    const linkDebounce = useRef(
        debounce(e => {
            handleLink(e)
        }, 500)
    ).current

    return (
        <Drawer
            title={<PageHeader
                onBack={() => handleDrawer({ visible: false })}
                title={contactData.title ? contactData.title : "Crie seu link"}
                style={{ padding: 0 }}
                extra={
                    id && <Button
                        style={{ fontSize: "12px" }}
                        onClick={() => deleteContact(contactData.id)}
                        danger
                    >
                        Excluir Contato
                    </Button>
                }
            />}
            placement="right"
            width="40vw"
            closable={false}
            onClose={() => {
                console.log(formRef)
                formRef.current.reset()
                setContactData({})
                handleDrawer({ visible: false })
            }}
            visible={visible}
        >
            <Spin indicator={antIcon} spinning={loading}>
                <S.Container>
                    {!id &&
                        <FormLink setId={(id) => setNewId(id)} />}

                    {id &&
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <FormItem>
                                <Input
                                    name="title"
                                    label="Título"
                                    placeholder="Informe um título para identificar o link"
                                />
                            </FormItem>
                            <FormItem>
                                <InputMask
                                    name="number"
                                    label="Número do seu WhatsApp"
                                    placeholder="Digite o número do seu WhatsApp"
                                    mask="+55 (99) 99999-9999"
                                    onBlur={e => formRef.current.setFieldValue('number', e.target.value.replace(/[^+0-9]/g, ''))}
                                />
                            </FormItem>
                            <FormItem>
                                <TextArea
                                    name="message"
                                    label="Sua mensagem"
                                    rows="5"
                                    placeholder="Coloque aqui a mensagem que irão mandar"
                                />
                            </FormItem>
                            <FormItem>
                                <Input
                                    name="link"
                                    type="text"
                                    label="Link para acessar seu contato"
                                    placeholder="Digite o link que irão te encontrar"
                                    onChange={e => handleChangeLink(e.target.value)}
                                    onBlur={e => handleLink(e.target.value)}
                                    validate={linkStatus}
                                />
                                <S.PreviewLink>{`https://sendwhats.me/${preview}`}</S.PreviewLink>
                            </FormItem>
                            <FormItem>
                                <S.ActionButton
                                    type="primary"
                                    htmlType="submit"
                                    size="large" block>
                                    Gerar Link
                                </S.ActionButton>
                            </FormItem>
                        </Form>}
                </S.Container>
            </Spin>
        </Drawer>
    )
}

export default Home