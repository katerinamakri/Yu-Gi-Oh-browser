import React, { Component } from 'react';
import './App.css';

class ListView extends Component {

	render(){
		let displayListView = this.props.isListViewOpen ? "block" : "none";

		return(
			<div className="list-container" style={{ display: displayListView }}>
				<ul className="list" >
					{this.props.cards.map( (card, index) => (
						<li key={index} onClick={() => this.props.fetchCardData(card.cardName)}> 
							<p> {card.cardName} </p>     				
						</li> 
					))}
				</ul>
			</div>
		);
	}
}

export default ListView;