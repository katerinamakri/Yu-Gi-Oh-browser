import React, { Component } from 'react';
import './App.css';

class Card extends Component {

	render(){
		let imgUrl;

		if ((this.props.query === '' && this.props.selectedCard.length === 0) || (this.props.selectedCard === undefined))  {
			return (
				<div className="card-container">
					<div className="paragraph-container">
						<p> Please select a card </p>
					</div>
				</div>
			)

		} else {

			imgUrl = `http://52.57.88.137/api/card_image/${this.props.query}`
			const { name, card_type, text, level, type, family } = this.props.selectedCard;
			
			return(
				<div className="card-container">
					<div className="card-header">
						<h2> {name} </h2>
						<p> <span>{card_type}</span></p>
					</div>
					<div className="card-box">
						<div className="img-container">
							<img src={imgUrl} alt={this.props.query}  className="card-img"/>
						</div>
						<div className="card-info">
							<h2> Description</h2>
							<p>{text}</p>
							<h2>Details</h2>
							<p> Level: <span>{level} </span></p>
							<p> Type: <span>{type} </span></p>
							<p> Family: <span>{family}</span></p>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Card;