import React from 'react'

import { Layout } from 'antd'

const Wrapper = (props) => {
    return (
        <Layout>
            <Layout>
                {props.children}
            </Layout>
        </Layout>
    )
}

export default Wrapper
