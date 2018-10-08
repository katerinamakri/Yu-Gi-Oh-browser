import React, { Component } from 'react';
import './App.css';

class Header extends Component {
	render(){
		return(
        <div className="App-header">
          <button onClick={() => this.toggleSiderMenu()}> <i className="fas fa-bars"></i> </button>       
          <h1 className="App-title">Yu-Gi-Oh Deck Browser</h1>
        </div>			
		);
	}


}

export default Header;