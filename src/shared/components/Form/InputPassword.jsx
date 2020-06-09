import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { Eye, EyeSlash } from 'styled-icons/fa-regular'

import { FieldPassword, Label } from './styles'

const InputPassword = ({ name, label, ...rest }) => {
    const [type, setType] = useState(true)
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
        if (type) {
            return <EyeSlash
                className="icon"
                size={24}
                onClick={() => setType(!type)}
            />
        } else {
            return <Eye
                className="icon"
                size={24}
                onClick={() => setType(!type)}
            />
        }
    }

    return (
        <>
            <Label htmlFor={fieldName}>{label}</Label>

            <FieldPassword>
                <input
                    type={type ? 'password' : 'text'}
                    id={fieldName}
                    haserror={error}
                    ref={inputRef}
                    onFocus={clearError}
                    defaultValue={defaultValue}
                    {...rest}
                />

                {handleIcon()}
            </FieldPassword>

            {error && <span className="error">{error}</span>}
        </>
    )
}

export default InputPassword
