import React, { Component } from 'react';
import './App.css';

class ListView extends Component {

	render(){
		return(
			<ul className="list" >
				{this.props.cards.map( (card, index) => (
					<li key={index} > 
						<button> Button </button>         				
					</li> 
				))}
			</ul>

		);
	}


}

export default ListView;