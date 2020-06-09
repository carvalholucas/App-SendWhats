import React, { useRef, useState } from 'react'
import { message, Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import { Form } from '@unform/web'

import Schema, { handleError } from './validate'

import * as G from '../styles'

import { LoadingOutlined } from '@ant-design/icons'
import Input from '../../../shared/components/Form/Input'
import { FormItem } from '../../../shared/components/Form/styles'
import api from '../../../api'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const RegisterForm = ({ handleVisible }) => {
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef(null)

    async function handleSubmit(data) {
        try {
            setIsLoading(true)

            await Schema.validate(data, { abortEarly: false })

            const res = await api.post("/users/register", data).catch(err => {
                message.error(`${err.response?.data.message}`)
            })

            if (res) {
                setIsLoading(false)
                handleVisible(true)
            }
        } catch (err) {
            setIsLoading(false)
            handleError(err, formRef)
        }
    }

    return (
        <Spin indicator={antIcon} spinning={isLoading}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormItem>
                    <Input
                        name="name"
                        type="text"
                        label="Seu nome:"
                        placeholder="Como você quer ser chamado"
                    />
                </FormItem>

                <FormItem>
                    <Input
                        name="email"
                        type="email"
                        label="E-mail:"
                        placeholder="Informe um e-mail válido"
                    />
                </FormItem>

                <FormItem>
                    <Input
                        name="password"
                        type="password"
                        label="Senha:"
                        placeholder="Informe uma senha segura"
                    />
                </FormItem>

                <FormItem>
                    <G.ActionButton
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block >Criar usuário</G.ActionButton>
                </FormItem>
            </Form>
        </Spin>
    )
}

export default withRouter(RegisterForm)
