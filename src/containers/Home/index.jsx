import React, { useState, useEffect } from 'react'
import { Avatar, Spin } from 'antd'

import Form from './Form'
import * as S from './styles'
import api from '../../api'

import { LoadingOutlined } from '@ant-design/icons'
import { Add } from 'styled-icons/material-rounded'
import { User } from 'styled-icons/boxicons-regular'

const Home = () => {
    const [id, setId] = useState(null)
    const [visible, setVisible] = useState(false)
    const [contacts, setContacts] = useState([])
    const [reload, setReload] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        if (reload) {
            getContacts()
        }
    }, [reload])

    async function getContacts() {
        setIsLoading(true)

        const idUser = JSON.parse(localStorage.getItem('sendwhats_user')).id_usuario

        const res = await api.get(`contacts?id_user=${idUser}`).catch(err => { 
            setIsLoading(false)
            console.log('erro', err) 
        })

        if (res) {
            setIsLoading(false)
            setContacts(res.data)
        }
    }

    return (
        <>
            <Spin indicator={antIcon} spinning={isLoading}>
                <S.MainWrapper>
                    <S.Card onClick={() => setVisible(true)}>
                        <Avatar size={64} style={{ color: '#49aa98', backgroundColor: 'rgba(73, 170, 152, .1)' }}><Add size={30} /></Avatar>
                        <S.CardTitle>Criar Link</S.CardTitle>
                    </S.Card>

                    {contacts.map((contact, index) => (
                        <S.Card className="card-contact" key={index}>
                            <Avatar
                                size={40}
                                style={{ color: '#49aa98', backgroundColor: 'rgba(73, 170, 152, .1)' }}
                            >
                                <User size={22} />
                            </Avatar>
                            <S.CardDesc>
                                <p style={{ fontWeight: 700, fontSize: '14px', marginBottom: 10 }}>{contact.title}</p>
                                <p style={{ marginBottom: 10 }}>{contact.number}</p>
                                <p>sendwhats.me/{contact.link}</p>
                            </S.CardDesc>
                            <S.CardButton
                                onClick={() => {
                                    setVisible(true)
                                    setId(contact.id)
                                }}>
                                Editar Contato</S.CardButton>
                        </S.Card>
                    ))}
                </S.MainWrapper>
            </Spin>

            <Form
                id={id}
                visible={visible}
                handleDrawer={({ visible }) => {
                    setVisible(visible)

                    if (!visible) {
                        setReload(true)
                        setId(null)
                    }
                }}
            />
        </>
    )
}

export default Home;
