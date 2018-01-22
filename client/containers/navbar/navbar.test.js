import React from 'react';
import { createMockStore } from 'redux-test-utils';
import NavBar from './navbar';
import { shallowWithStore } from '../../../config/testHelpers';

let wrapper;
let store;

beforeAll(() => {
  const testState = {
    user: {},
  };
  store = createMockStore(testState);
  wrapper = shallowWithStore(<NavBar />, store);
});

test('render home component', () => {
  expect(wrapper).toMatchSnapshot();
});
