# Simple Yu-Gi-Oh Deck Browser
This is a simple web application created with react.js. On the left side of browser, the user can select a card and the card information will appear on the right side.


## How to get started

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## About

The application was created with a create-reaction application.  The parent component (App.js) consists of two children components, ListView and Card.
The Parent component contains the cards list, the state which is updated by ListView component and the function that retrieves the data. ListView takes as props the list from Parent component and displays it in the UI. It also calls the fetchCardData function from Parent component to retrieve selectedCard data. Card component takes as props the selectedCard from App and displays the card information in UI.


## Dependencies
* [Create React App](https://github.com/facebook/create-react-app)
* [Yugioh Prices Apiary](https://yugiohprices.docs.apiary.io/#)
* [Jest Testing](https://jestjs.io/en/)