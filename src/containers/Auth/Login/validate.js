import * as Yup from 'yup'

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Informe um e-mail')
        .email('Informe um e-mail válido'),
    password: Yup.string()
        .required('Informe uma senha')
})

export const handleError = (err, formRef) => {
    if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
            errorMessages[error.path] = error.message
        })

        console.log(errorMessages)
        formRef.current.setErrors(errorMessages)
    }
}

export default schema