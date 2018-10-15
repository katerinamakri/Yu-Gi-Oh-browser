import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import ListView from './ListView.js';

describe('ListView', () => {

	it('should be defined', () => {
		expect(ListView).toBeDefined();
	});

	it('should have props', () => {
		const theDeck = [{'id': 0,'cardName':'Burial from a Different Dimension'},{'id': 1,'cardName':'Charge of the Light Brigade'}]
		let fetchCardData = jest.fn();
 		const wrapper = shallow(<ListView cards={theDeck} fetchCardData={fetchCardData} selectedCard={'Infernoid Attondel'} />)
 		expect(wrapper.props().fetchCardData).toBeDefined();
	});

});

describe('Check onClick event',() => {

	it('clicking list item',() => {
		var mockFunction = jest.fn();
		var component = shallow(<App fetchCardData={mockFunction} />);
		component.find(ListView).simulate('click');
		expect(mockFunction).toHaveBeenCalled();
	})
})
