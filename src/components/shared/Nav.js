import React, { Component } from "react";
import "./../Budget/Budget.css";

class Nav extends Component {
	render() {
		let { firstName, lastName } = this.props;
		if (!firstName) firstName = "MISSING";
		if (!lastName) lastName = "MISSING";

		return (
			<div className="top">
				<div className="title">budgetty</div>
				<div className="user-info">
					{firstName} {lastName}
					<img
						src="data:image/jpeg;base64,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"
						alt=""
						className="photo"
					/>
					<a href="http://localhost:4000/auth/logout">
						<button className="btn btn-md btn-outline-dark mr-4">logout</button>
					</a>
				</div>
			</div>
		);
	}
}

export default Nav;
