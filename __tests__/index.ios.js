import 'react-native';
import React from 'react';
import Home from '../app/containers/Home'
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import configureStore from 'react-test-renderer';

const initialState = {events: []};
const mockStore = configureStore(initialState);
const store = mockStore(initialState);


it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Home /></Provider>
  );
});

{/*it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});*/}