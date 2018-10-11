import React, { Component } from 'react';
import './App.css';

class ListView extends Component {

	render(){

		return(
			<div className="list-container">
				<ul className="list" >
					{this.props.cards.map( (card, index) => (
						<li key={index} onClick={() => this.props.fetchCardData(card.cardName)}> 
							<p> {card.cardName} </p>
							<p> {this.props.selectedCard.card_type} </p>         				
						</li> 
					))}
				</ul>
			</div>
		);

	}


}

export default ListView;