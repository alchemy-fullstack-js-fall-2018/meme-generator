import React, { Component, Fragment } from 'react';

export default class App extends Component {

  state = {
    url: '',
    header: '',
    footer: '',
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { url, header, footer } = this.state;
    return (
      <Fragment>
        <h1>Lets Make Some Memes!</h1>
        <form>
          <input name="url" placeholder="Add an Image URL" value={url} onChange={this.onChange}/>
          <input name="header" placeholder="Add Header" value={header} onChange={this.onChange}/>
          <input name="footer" placeholder="Add Footer" value={footer} onChange={this.onChange}/>
          <button type="submit">Make a Meme</button>
        </form>
        <div>
          <img src={url} alt="meme"/>
        </div>
      </Fragment>
    )
  }
}