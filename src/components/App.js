import React, { Component, Fragment } from 'react';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Lets Make Some Memes!</h1>
        <form>
          <input placeholder="Add an Image"/>
          <input placeholder="Add Header"/>
          <input placeholder="Add Footer"/>
          <button type="submit">Make a Meme</button>
        </form>
      </Fragment>
    )
  }
}