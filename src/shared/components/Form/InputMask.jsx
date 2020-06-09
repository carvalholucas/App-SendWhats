import React, { useRef, useEffect } from 'react'

import { useField } from '@unform/core'

import { Label, FieldMask } from './styles'

const InputMask = ({ name, label, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, clearError, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref, value) {
                if (value) 
                    ref.setInputValue(value)
            },
            clearValue(ref) {
                ref.setInputValue('')
            },
        })
    }, [fieldName, registerField])

    return (
        <>
            <Label htmlFor={fieldName}>{label}</Label>

            <FieldMask
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

export default InputMask
