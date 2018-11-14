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
    upload: '',
    img: './src/assets/sPonGeBOb.jpg'
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value})
  };

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
    const { topText, bottomText, font, textColor, img, url, upload } = this.state;

    return (
      <Fragment>
        <h1>memes? where we're going, we're gonna need memes</h1>

        <form className={styles.form}>
          <label htmlFor="url">Enter an image URL:</label>
          <input name="url" id="url" placeholder="http://example.com" onChange={this.onChange} value={url}></input>

          <label htmlFor="upload">Upload your own image:</label>
          <input type="file" id="upload" name="upload" accept=".jpg,.gif,.png,.svg" onChange={this.onChange} value={upload}></input>

          <label htmlFor="topText">Top Text:</label>
          <input name="topText" id="topText" placeholder="this is your top text" onChange={this.onChange} value={topText}></input>

          <label htmlFor="bottomText">Bottom Text:</label>
          <input name="bottomText" placeholder="this is your bottom text" onChange={this.onChange} value={bottomText}></input>
        </form>

        <div className={styles.image}>
          <span id="image">
            {img && <img src={img} />}
            {topText}
            {bottomText}
            {img && <button onClick={this.saveImage}>Save your meme!</button>}
          </span>
        </div>

      </Fragment>
    );
  };
}