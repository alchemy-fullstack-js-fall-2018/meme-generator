import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component{

  state = {
    url: ''
  };


  // displayImage = (event) => {
  //   event.preventDefault();
  //   domToImage.toPng(document.getElementById('url'))
  //     .then(img => {
  //       this.setState({ img });
  //     });
  // }
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }



  render() {

    const { url } = this.state;

    return (
      <Fragment>
        <h1>Who is ready to Meme?</h1>
        {/* <form onSubmit={this.displayImage}> */}
        <form>
          <div id="urlUploader">
            <label htmlFor="url">Upload image via URL here</label>
            <input name="url" id="url" type="url" value={url} onChange={this.onChange}/>
            <button type="submit">Submit</button>
          </div>
          {/* <h4>or</h4>
          <div id="fileUploader">
          <label htmlFor="file">Upload image from you computer</label>
          <input name="file" id="file" type="file"/>
        </div> */}
        </form>

        <img src={url} alt="meme image"/>
      </Fragment>
    );
  }
}
