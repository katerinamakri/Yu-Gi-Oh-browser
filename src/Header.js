import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	render(){

		// onClick={() => this.toggleListView()}
		return(
        <div className="App-header">
          <button  className="hamburger-button"></button>       
          <h1 className="App-title">Yu-Gi-Oh Deck Browser</h1>
        </div>			
		);
	}


}

export default Header;