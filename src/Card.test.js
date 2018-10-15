import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {

	it('renders without props', () => {
		const wrapper = shallow(<Card />);
		expect(wrapper.html().length > 0).toBe(true)
	});

	it('should be defined', () => {
		expect(Card).toBeDefined();
	});
 	
	it('should have props', () => {
		const wrapper = shallow(<Card query={'Infernoid Attondel'} selectedCard={'Infernoid Attondel'} />)
		expect(wrapper.props().selectedCard).toBeDefined();
	});
 
});


