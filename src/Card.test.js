import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {

	it('should be defined', () => {
   	expect(Card).toBeDefined();
 	});
 	
 	it('should have props', () => {
 		const wrapper = shallow(<Card query={'Infernoid Attondel'} selectedCard={'Infernoid Attondel'} />)
 		expect(wrapper.props().selectedCard).toBeDefined();
 	});
 
});


