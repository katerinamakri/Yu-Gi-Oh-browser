import React, { Component } from 'react';
import './App.css';

class Card extends Component {

	render(){
		let imgUrl;

		if (this.props.query === undefined || this.props.query === ''  || this.props.selectedCard.length === 0) {
			imgUrl='https://www.colburnschool.edu/wp-content/uploads/2018/02/pix-vertical-placeholder.jpg'
		} else {
			imgUrl=`http://52.57.88.137/api/card_image/${this.props.query}`
		}

		return(
			<div className="card-container">
				<h2> {this.props.selectedCard.name} </h2>
				<div className="card-box">
					<div className="img-container">
						<img src={imgUrl} alt={this.props.query}  className="card-img"/>
					</div>
					<div className="card-info">
						<h2> Description</h2>
						<p>{this.props.selectedCard.text}</p>
						<h2>Details</h2>
						<p> Level: {this.props.selectedCard.level}</p>
						<p> Type: {this.props.selectedCard.type}</p>
						<p> Family: {this.props.selectedCard.family}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;