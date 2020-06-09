import React from 'react'
import { Layout } from 'antd'

import * as S from './styles'
import Sidebar from './Sidebar'

const Wrapper = (props) => {
    return (
        <Layout>
            <Sidebar />
            <S.MainLayout>
                {props.children}
            </S.MainLayout>
        </Layout>
    )
}

export default Wrapper
