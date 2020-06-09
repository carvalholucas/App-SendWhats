import React, { useRef, useState } from 'react'
import { message, Spin } from 'antd'
import { withRouter } from 'react-router-dom'
import { Form } from '@unform/web'
import jwt_decode from 'jwt-decode'

import Schema, { handleError } from './validate'

import * as G from '../styles'

import { LoadingOutlined } from '@ant-design/icons'
import Input from '../../../shared/components/Form/Input'
import InputPassword from '../../../shared/components/Form/InputPassword'
import { FormItem } from '../../../shared/components/Form/styles'
import api from '../../../api'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const LoginForm = ({ history }) => {
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef(null)

    async function handleSubmit(data, { reset }) {
        try {
            setIsLoading(true)

            await Schema.validate(data, { abortEarly: false })

            const res = await api.post("/users/login", data).catch(err => {
                message.error(`${err.response?.data.message}`)
            })

            if (res) {
                const token = res.data.token
                const decodeToken = jwt_decode(token)

                localStorage.setItem('sendwhats_token', token)
                localStorage.setItem('sendwhats_user', JSON.stringify(decodeToken))

                setIsLoading(false)

                history.push('/')
            }
        } catch (err) {
            setIsLoading(false)
            handleError(err, formRef)
            
            message.error('Falha ao tentar logar')
        }
    }

    return (
        <Spin indicator={antIcon} spinning={isLoading}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormItem>
                    <Input
                        name="email"
                        type="email"
                        label="E-mail:"
                        placeholder="Endereço de e-mail"
                    />
                </FormItem>

                <FormItem>
                    <InputPassword
                        name="password"
                        label="Senha:"
                        placeholder="Digite sua senha"
                    />
                </FormItem>

                <FormItem>
                    <G.Forgot>Esqueci minha senha</G.Forgot>
                </FormItem>

                <FormItem>
                    <G.ActionButton
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block >Entrar</G.ActionButton>
                </FormItem>
            </Form>
        </Spin>
    )
}

export default withRouter(LoginForm)
