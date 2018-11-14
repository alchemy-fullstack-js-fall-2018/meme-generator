import React from 'react';
import App from './App';
import render from 'react-test-renderer';

describe('Meme Generator', () => {
  test('App snapshot', () => {
    expect(render
      .create(<App />)
      .toJSON()).toMatchSnapshot();
  });
});
