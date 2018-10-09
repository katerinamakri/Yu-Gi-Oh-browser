import React, { Component } from 'react';
import './App.css';

class ListView extends Component {

	render(){

		return(
			<div className="list-container">
				<ul className="list" >
					{this.props.cards.map( (card, index) => (
						<li key={index} > 
							<p> {card.cardName} </p>
							<button> {this.props.cardsData.card_type} </button>         				
						</li> 
					))}
				</ul>
			</div>
		);
	}


}

export default ListView;