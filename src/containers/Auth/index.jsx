import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import * as G from './styles'

import Logo from '../../assets/logo.png'
import Illustration from '../../assets/illustration2.svg'

const Auth = () => {

    const [loginIsVisible, setLoginIsVisible] = useState(true)

    const handleRegisterLogin = () => {
        if (loginIsVisible) {
            return <G.hasAccount
                onClick={() => setLoginIsVisible(false)}>
                Não tem uma conta? <span>Crie agora</span>
            </G.hasAccount>
        } else {
            return <G.hasAccount
                onClick={() => setLoginIsVisible(true)}>
                Já tem uma conta? <span>Faça seu login</span>
            </G.hasAccount>
        }
    }

    if (localStorage.getItem('sendwhats_token')) {
        return <Redirect to="/" />
    } else {
        return (
            <G.MainWrapper>
                <G.Section>
                    <G.Image src={Logo} alt="SendWhats" />
                    {loginIsVisible && <Login />}
                    {!loginIsVisible && <Register handleVisible={setLoginIsVisible}/>}
                    {handleRegisterLogin()}
                </G.Section>
                <G.SectionBackground>
                    <img src={Illustration} alt="SendWhats Illustration" style={{ width: '100%' }} />
                </G.SectionBackground>
            </G.MainWrapper>
        )
    }
}

export default Auth
