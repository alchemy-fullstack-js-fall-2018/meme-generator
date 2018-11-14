import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component{

  render() {
    return (
      <Fragment>
        <h1>Who is ready to Meme?</h1>
        <form>
          <div id="urlUploader">
            <label htmlFor="url">Upload image via URL here</label>
            <input name="url" id="url" type="url"/>
            <button>Submit</button>
          </div>
          <h4>or</h4>
          <div id="fileUploader">
            <label htmlFor="file">Upload image from you computer</label>
            <input name="file" id="file" type="file"/>
          </div>
        </form>
      </Fragment>
    );
  }
}
