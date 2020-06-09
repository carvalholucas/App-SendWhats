import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons'

import { Field, Label } from './styles'

const Input = ({ name, label, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, clearError, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    const handleIcon = () => { 
        if (rest.validate === 'validating') {
            return <LoadingOutlined className="icon" size={24} />
        } else  {
            return <CheckCircleTwoTone className="icon" twoToneColor="#52c41a" />
        }
    }

    return (
        <>
            <Label htmlFor={fieldName}>{label}</Label>

            <Field>
                <input
                    className={`field ${error ? 'field-error' : ''}`}
                    id={fieldName}
                    ref={inputRef}
                    onFocus={clearError}
                    defaultValue={defaultValue}
                    {...rest}
                />

                {rest?.validate && handleIcon()}
            </Field>

            {error && <span className="error">{error}</span>}
        </>
    )
}

export default Input
