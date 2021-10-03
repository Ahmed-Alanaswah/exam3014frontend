import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import FlowerCards from "./FlowerCards";
export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showApiData: false,
			flowerApiData: [],
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/flower`);
		this.setState({
			showApiData: true,
			flowerApiData: request.data,
		});
	};

	addToFavourite = async (obj) => {
		axios.post(`http://localhost:8001/flower/favourite`, obj);
		console.log(obj);
	};

	render() {
		return (
			<Row>
				{this.state.showApiData && (
					<FlowerCards
						flowerApiData={this.state.flowerApiData}
						addToFavourite={this.addToFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Main;
