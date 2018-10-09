import React, { Component } from 'react';
import './App.css';

class Card extends Component {

	render(){
		return(
			<div className="card-container">
				<h2> {this.props.cardsData.name} </h2>
				<div className="card-box">
					<div className="img-container">
						<img src="http://placekitten.com/200/300" alt="placeholder"/>
					</div>
					<div className="card-info">
						<h2> Description</h2>
						<p>{this.props.cardsData.text}</p>
						<h2>Details</h2>
						<p> Level: {this.props.cardsData.level}</p>
						<p> Type: {this.props.cardsData.type}</p>
						<p> Family: {this.props.cardsData.family}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;