import styled from 'styled-components'
import media from 'styled-media-query'

import { Button, Form, Input } from 'antd'
import WhatsappImage from '../../assets/whatsapp-bg.png'

const { TextArea } = Input
const { Item } = Form

export const Container = styled.section`
    align-items: center;
    background-image: ${`url(${WhatsappImage})`};
    display: flex;
    justify-content: center;
    height: 100%;

    &:before {
        content: '';
        background: #25d366;
        display: block;
        height: 50vh;
        opacity: .6;
        position: absolute;
        top: 0;
        width: 100%;
    }
`

export const FormWrapper = styled(Form)`
    width: 35vw;
    z-index: 2;

    ${media.lessThan("medium")`
        width: 80vw;
    `}
`

export const Label = styled(Item)`
    font-weight: 600;

    .ant-form-item-label > label {
        color: #2c6558;
    }
`

export const InputStyle = styled(Input)`
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(100,100,100,.1);
    color: #263056;
    font-family: Montserrat-Regular;

    .ant-input {
        font-size: .8em;
        font-weight: 600;
    }

    .ant-input-group-addon {
        border: none !important;
        border-radius: 5px 0 0 5px;
    }
`

export const TextAreaStyle = styled(TextArea)`
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(100,100,100,.1);
    color: #263056;
    font-family: Montserrat-Regular;
    font-weight: 600;
    margin-bottom: 0 !important;
    padding: 1em;
    resize: none;
`

export const ActionButton = styled(Button)`
    font-weight: 600;
    margin-top: 30px;
`

export const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    h1 {
        margin-bottom: 0px;
        color: rgb(255, 255, 255);
        font-size: 2em;
        font-weight: 700;
        text-align: center;
        margin-left: 15px;
    }

    ${media.lessThan("medium")`
        h1 {
            font-size: 1.7em;
            margin-left: 0;
        }        
    `}
`

export const Image = styled.img`
    width: 45px;

    ${media.lessThan("medium")`
        display: none; 
    `}
`