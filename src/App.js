import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import ListView from './ListView.js';
import Card from './Card.js';

const theDeck = [
  {id:'0', cardName:'Burial from a Different Dimension'},
  {id:'1', cardName:'Charge of the Light Brigades'},
  {id:'2', cardName:'Infernoid Antra'},
  {id:'3', cardName:'Infernoid Attondel'},
  {id:'4', cardName:'Infernoid Decatron'},
  {id:'5', cardName:'Infernoid Devyaty'},
  {id:'6', cardName:'Infernoid Harmadik'},      
  {id:'7', cardName:'Infernoid Onuncu'},
  {id:'8', cardName:'Infernoid Patrulea'},
  {id:'9', cardName:'Infernoid Pirmais'},
  {id:'10', cardName:'Infernoid Seitsemas'},
  {id:'11', cardName:'Lyla, Lightsworn Sorceress'},
  {id:'12', cardName:'Monster Gate'},
  {id:'13', cardName:'One for One'},
  {id:'14', cardName:'Raiden, Hand of the Lightsworn'},
  {id:'15', cardName:'Reasoning'},
  {id:'16', cardName:'Time-Space Trap Hole'},
  {id:'17', cardName:'Torrential Tribute'},
  {id:'18', cardName:'Upstart Goblin'},
  {id:'19', cardName:'Void Seer'}
];

class App extends Component {
   constructor(props){
    super(props)

    this.state = {
      cards: theDeck,
      cardsData:[]
    }

    this.fetchCardData = this.fetchCardData.bind(this)
    // this.getData = this.getData.bind(this)
   }

  componentDidMount() {
    this.fetchCardData();    
  }

  fetchCardData (){
    var query='Infernoid Antra'

    var request = require('request'); 

    //set options
    var options = {
      url: 'http://52.57.88.137/api/card_data/' + query,
      method: 'GET'
    };

    request(options, function (error, response, body) {
      
      response.body = JSON.parse(body);
      // console.log('Response:', body['data']);

      this.setState({
        cardsData: response.body.data
      }) 
      

      console.log(this.state.cardsData);
    
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <ListView 
            cards={this.state.cards}
          />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
