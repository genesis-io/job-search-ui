import React from 'react';
import Home from './home';

test('render home component', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});