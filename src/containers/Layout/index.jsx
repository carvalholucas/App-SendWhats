import React from 'react'

import * as S from './styles'

const Wrapper = (props) => {
    return (
        <S.MainLayout>
            {props.children}
        </S.MainLayout>
    )
}

export default Wrapper
