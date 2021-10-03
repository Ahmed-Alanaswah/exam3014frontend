import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FavouriteCards extends Component {
	render() {
		return this.props.flowerFavData.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.photo} />
						<Card.Body>
							<Card.Title>{obj.name}</Card.Title>
							<Card.Text>{obj.instructions}</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.deleteFavourite(obj.slug);
								}}
							>
								delete
							</Button>

							<Button
								variant="primary"
								onClick={(e) => {
									this.props.showFormUpdate(
										obj.slug,
										obj.name,
										obj.instructions
									);
								}}
							>
								update
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FavouriteCards;
