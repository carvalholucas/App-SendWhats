import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
            if (localStorage.getItem('sendwhats_token')) {
                return <Component {...props} />
            } else {
                localStorage.clear()
                return <Redirect
                    to={{
                        pathname: "/auth",
                        state: { from: props.location }
                    }}
                />
            }
        }
        }
    />
);

export default PrivateRoute