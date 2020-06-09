import styled from 'styled-components'

import ReactInputMask from 'react-input-mask'

export const FormItem = styled.div`
    display: flex;
    font-size: 14px;
    flex-direction: column;
    margin-bottom: 24px;

    .error {
        color: #ff4d4f;
        font-size: 12px;
        padding-top: .5em;
    }
`

export const Label = styled.label`
    margin-bottom: 10px;
    line-height: 1.5715;
    white-space: initial;
`

export const Field = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    position: relative;

    .icon {
        cursor: pointer;
        color: ${props => props.color ? props.color : '#3093f7'};
        position: absolute;
        width: 2.2em;
        padding-right: 1em;
    }

    input {
        border-radius: 5px;
        border: 1px solid #e6e6e6;
        font-size: 13px;
        outline: 0;
        padding: 1em;
        width: 100%;

        &.field-error {
            border: 1px solid #ff4d4f;
        }

        &.field-success {
            border: 1px solid #5fc837;
        }

        ::placeholder {
            color: #c9c9c9;
        }

        &:focus {
            border-color: #02c39a;
        } 
    }
    
`

export const FieldMask = styled(ReactInputMask)`
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    font-size: 13px;
    outline: 0;
    padding: 1em;

    &.field-error {
        border: 1px solid #ff4d4f;
    }

    &.field-success {
        border: 1px solid #5fc837;
    }

    ::placeholder {
        color: #c9c9c9;
    }

    &:focus {
        border-color: #02c39a;
    }
`

export const FieldArea = styled.textarea`
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    font-size: 13px;
    outline: 0;
    padding: 1em;
    resize: none;

    &.field-error {
            border: 1px solid #ff4d4f;
    }

    &.field-success {
        border: 1px solid #5fc837;
    }

    ::placeholder {
        color: #c9c9c9;
    }

    &:focus {
        border-color: #02c39a;
    }
`

export const FieldPassword = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    position: relative;

    .icon {
        cursor: pointer;
        color: #949494;
        height: 2.2em;
        position: absolute;
        width: 2.2em;
        padding-right: 1em;
    }

    input {
        border-radius: 5px;
        border: 1px solid #e6e6e6;
        font-size: 13px;
        outline: 0;
        padding: 1em;
        width: 100%;

        &.field-error {
            border: 1px solid #ff4d4f;
        }

        &.field-success {
            border: 1px solid #5fc837;
        }

        ::placeholder {
            color: #c9c9c9;
        }

        &:focus {
            border-color: #02c39a;
        }
    }
`