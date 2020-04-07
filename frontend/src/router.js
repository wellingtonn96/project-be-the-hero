import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import auth from './auth'

import Login from './pages/Login'
import Register from './pages/Register'
import Incident from './pages/Newincident'
import Profile from './pages/Profile/index'

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				auth() ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	)
}

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<PrivateRoute path="/incident/new" exact component={Incident} />
				<PrivateRoute path="/profile" exact component={Profile} />
			</Switch>
		</BrowserRouter>
	)
}
