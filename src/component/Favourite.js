import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import FavouriteCards from "./FavouriteCards";
import Form from "./Form";
export class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showFavData: false,
			flowerFavData: [],
			slug: "",
			name: "",
			instructions: "",
			showForm: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/flower/favourite`);
		this.setState({
			showFavData: true,
			flowerFavData: request.data,
		});

		console.log(this.state.flowerFavData);
	};

	deleteFavourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8001/flower/favourite/${slug}`
		);
		this.setState({
			showApiData: true,
			flowerFavData: request.data,
		});
	};

	showFormUpdate = async (slug, name, instructions) => {
		this.setState({
			slug: slug,
			name: name,
			instructions: instructions,
			showForm: true,
		});
	};

	updateData = async (e) => {
		e.preventDefault();
		const updated = {
			name: this.state.name,
			instructions: this.state.instructions,
		};
		const request = await axios.put(
			`http://localhost:8001/flower/favourite/${this.state.slug}`,
			updated
		);
		console.log(updated);
		this.setState({
			showApiData: true,
			flowerFavData: request.data,
		});
	};

	updateName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	updateInstructions = (e) => {
		this.setState({
			instructions: e.target.value,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						updateData={this.updateData}
						updateName={this.updateName}
						updateInstructions={this.updateInstructions}
						name={this.state.name}
						instructions={this.state.instructions}
					/>
				)}
				{this.state.showFavData && (
					<FavouriteCards
						flowerFavData={this.state.flowerFavData}
						deleteFavourite={this.deleteFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default Favourite;
