import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../../shared/components/PrivateRoute'

import Layout from '../Layout'
import { MainLayout } from '../Layout/styles'
import Home from '../Home'
import Auth from '../Auth'

const wrappedRoutes = () => (
    <MainLayout>
        <Layout>
            <Route exact path="/" component={Home} />
        </Layout>
    </MainLayout>
)

const Routes = () => (
    <Switch>
        <PrivateRoute exact path="/" component={wrappedRoutes} />
        <Route path="/auth" component={Auth} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes