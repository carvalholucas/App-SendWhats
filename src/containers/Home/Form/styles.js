import styled from 'styled-components'
import media from 'styled-media-query'

import { Button, Select } from 'antd'

export const Container = styled.section`
    padding: 2em;
`

export const PreviewLink = styled.p`
    color: #9a9a9a;
    font-size: .9em;
    margin-top: .5em;
`

export const SelectStyle = styled(Select)`
    width: 20% !important;

    .ant-select-selector {
        border: none !important;
        border-radius: 5px 0 0 5px !important;
        box-shadow: 0px 0px 12px rgba(100,100,100,.1);
        color: #263056;
        font-size: .8em;
    }
`

export const ActionButton = styled(Button)`
    border-radius: 5px;
    font-size: 15px;
    margin-top: 3em;
`
