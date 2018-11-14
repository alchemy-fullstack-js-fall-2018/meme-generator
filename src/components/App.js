import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {
  state = {

  }

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {

    return (
      <Fragment>
        <h1>check ya boy out making a react app yeeeeeeeeeeeeah</h1>

        <label for="url">Enter an image URL:</label>
        <input name="url" id="url" placeholder="http://example.com"></input>

        <label for="upload">Upload your own image:</label>
        <input type="file" id="upload" name="upload" accept=".jpg,.gif,.png,.svg"></input>

        <label for="topText">Top Text:</label>
        <input name="topText" id="topText" placeholder="this is your top text"></input>

        <label for="bottomText">Bottom Text:</label>
        <input name="bottomText" placeholder="this is your bottom text"></input>
      </Fragment>
    );
  }
}