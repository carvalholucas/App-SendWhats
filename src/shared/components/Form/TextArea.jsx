import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { FieldArea, Label } from './styles'

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

    return (
        <>
            <Label htmlFor={fieldName}>{label}</Label>

            <FieldArea
                id={fieldName}
                haserror={error}
                ref={inputRef}
                onFocus={clearError}
                defaultValue={defaultValue}
                {...rest}
            />

            {error && <span className="error">{error}</span>}
        </>
    )
}

export default Input
