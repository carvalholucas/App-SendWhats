import React from 'react'

import { Avatar, Dropdown, Layout, Menu, Popover } from 'antd'
import { LinkOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'

import * as S from './styles'
import Icon from '../../../assets/icon-sendwhats2.png'

const { Sider } = Layout

function handleLogout() {
    localStorage.clear()
    document.location.reload()
}

const Sidebar = () => {
    return (
        <Sider
            trigger={null}
            collapsed={true}
            theme="light"
            collapsible
        >
            <S.LogoWrapper>
                <img src={Icon} alt="SendWhats" style={{ height: '70%' }} />
            </S.LogoWrapper>

            <S.MenuWrapper>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ border: 'none' }}>
                    <Menu.Item key="1">
                        <IdcardOutlined style={{ fontSize: '19px' }} />
                        <span>Cartões de Visita</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <LinkOutlined style={{ fontSize: '19px' }} />
                        <span>Links</span>
                    </Menu.Item>
                </Menu>

                <Popover
                    placement="topLeft"
                    content={
                        <S.MenuSuspense>
                            <ul>
                                <S.LiSuspense>Minha Conta</S.LiSuspense>
                                <S.LiSuspense onClick={() => handleLogout()}>Logout</S.LiSuspense>
                            </ul>
                        </S.MenuSuspense>
                    }
                    trigger="hover">
                    <Avatar
                        size={52}
                        style={{ color: '#fff', backgroundColor: '#02c39a', fontSize: 18 }}
                    >
                        <UserOutlined />
                    </Avatar>
                </Popover>

                {/* <Dropdown overlay={menu} placement="bottomLeft">
                    <Avatar
                        size={52}
                        style={{ color: '#fff', backgroundColor: '#02c39a', fontSize: 18 }}
                    >
                        <UserOutlined />
                    </Avatar>
                </Dropdown> */}
            </S.MenuWrapper>
        </Sider>
    )
}

export default Sidebar
