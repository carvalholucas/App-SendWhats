import styled from 'styled-components'

import { Button, Input } from 'antd'

export const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: 32% 1fr;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    overflow: auto;
    width: 100%;
`

export const Section = styled.section`
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const SectionBackground = styled.section`
    background: #02c39a;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

export const Image = styled.img`
    width: 200px;
    margin-bottom: 80px;
`

export const hasAccount = styled.p`
    cursor: pointer;
    color: #028090;
    font-size: 14px;
    text-align: center;

    &:hover {
        color: #02c39a;
        text-decoration: underline;
    }

    span {
        font-weight: 600;
    }
`

export const Forgot = styled.p`    
    color: #028090;
    cursor: pointer;
    text-align: right;

    &:hover {
        color: #02c39a;
        text-decoration: underline;
    }
`

export const ActionButton = styled(Button)`
    font-size: 15px;
    border-radius: 5px;
    height: 45px;
`