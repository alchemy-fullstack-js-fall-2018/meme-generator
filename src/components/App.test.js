import React from 'react';
import App from './App';
import render from 'react-test-renderer';

describe('App Component', () => {
  test('header snapshot', () => {
    expect(render
      .create(<App />)
      .toJSON()).toMatchSnapshot();
  });
});
