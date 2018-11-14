import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component {
  state = {
    topText: '',
    bottomText: '',
    font: '',
    textColor: '',
    url: '',
    img: './src/assets/sPonGeBOb.jpg'
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value, img: ''}, () => {

    })
  }

  memeToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('image'))
      .then(img => {
        this.setState({ img });
      });
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {
    const { topText, bottomText, font, textColor, img } = this.state;

    return (
      <Fragment>
        <h1>check ya boy out making a react app yeeeeeeeeeeeeah</h1>

        <form className={styles.form}>
          <label for="url">Enter an image URL:</label>
          <input name="url" id="url" placeholder="http://example.com"></input>

          <label for="upload">Upload your own image:</label>
          <input type="file" id="upload" name="upload" accept=".jpg,.gif,.png,.svg"></input>

          <label for="topText">Top Text:</label>
          <input name="topText" id="topText" placeholder="this is your top text"></input>

          <label for="bottomText">Bottom Text:</label>
          <input name="bottomText" placeholder="this is your bottom text"></input>
        </form>
        <div className={styles.image}>
          <span id="image">
            {img && <img src={img} />}
            {img && <button onClick={this.saveImage}>Save your meme!</button>}
          </span>
        </div>

      </Fragment>
    );
  };
}