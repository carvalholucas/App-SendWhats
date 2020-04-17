import React from 'react'

import { Layout } from 'antd'

const Wrapper = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>
    )
}

export default Wrapper
