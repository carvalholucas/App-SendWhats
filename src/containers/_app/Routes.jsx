import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from '../Layout'
import Home from '../Home'

const wrappedRoutes = () => (
    <Layout>
        <Route exact path="/" component={Home} />
    </Layout>
)

const Routes = () => (
    <Switch>
        <Route path="/" component={wrappedRoutes} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes