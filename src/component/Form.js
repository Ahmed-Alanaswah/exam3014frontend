import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
export class Form extends Component {
	render() {
		return (
			<div>
				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<form onSubmit={this.props.updateData}>
							<input
								type="text"
								onChange={this.props.updateName}
								value={this.props.name}
							/>
							<input
								type="text"
								onChange={this.props.updateInstructions}
								value={this.props.instructions}
							/>
							<input type="submit" value="update" />
						</form>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary">Close</Button>
						<Button variant="primary">Save changes</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div>
		);
	}
}

export default Form;
