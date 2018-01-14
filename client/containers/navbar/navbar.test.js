import React from 'react';
import NavBar from './navbar';

test('render home component', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});