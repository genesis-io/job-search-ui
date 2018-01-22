import React from 'react';
import ErrorBoundary from './errorBoundaries';

test('render home component', () => {
  const wrapper = shallow(<ErrorBoundary />);
  expect(wrapper).toMatchSnapshot();
});