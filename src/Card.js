import React, { Component } from 'react';
import './App.css';

class Card extends Component {

	render(){
		let imgUrl, displayHeader;

		if (this.props.query === undefined || this.props.query === ''  || this.props.selectedCard.length === 0) {
			imgUrl='https://www.colburnschool.edu/wp-content/uploads/2018/02/pix-vertical-placeholder.jpg'
			displayHeader= "none";

		} else {
			imgUrl=`http://52.57.88.137/api/card_image/${this.props.query}`
			displayHeader = "flex";
		}

		return(
			<div className="card-container">
				<div className="card-header" style={{ display: displayHeader }}>
					<h2> {this.props.selectedCard.name} </h2>
					<p> <span>{this.props.selectedCard.card_type}</span></p>
				</div>
				<div className="card-box">
					<div className="img-container">
						<img src={imgUrl} alt={this.props.query}  className="card-img"/>
					</div>
					<div className="card-info">
						<h2> Description</h2>
						<p>{this.props.selectedCard.text}</p>
						<h2>Details</h2>
						<p> Level: <span>{this.props.selectedCard.level} </span></p>
						<p> Type: <span>{this.props.selectedCard.type} </span></p>
						<p> Family: <span>{this.props.selectedCard.family}</span></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;