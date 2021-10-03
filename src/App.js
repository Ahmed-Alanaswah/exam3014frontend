import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./component/Main";
import Header from "./component/Header";
import Favourite from "./component/Favourite";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/favourite">
						<Favourite />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
