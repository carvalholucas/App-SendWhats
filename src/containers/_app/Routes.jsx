import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from '../Layout'
import { MainLayout } from '../Layout/styles'
import Home from '../Home'

const wrappedRoutes = () => (
    <MainLayout>
        <Layout>
            <Route exact path="/" component={Home} />
        </Layout>
    </MainLayout>
)

const Routes = () => (
    <Switch>
        <Route path="/" component={wrappedRoutes} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes