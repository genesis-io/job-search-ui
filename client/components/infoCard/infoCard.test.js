import React from 'react';
import InfoCard from './infoCard';

test('render home component', () => {
  const wrapper = shallow(<InfoCard />);
  expect(wrapper).toMatchSnapshot();
});