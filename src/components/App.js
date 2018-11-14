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
    this.setState({ [target.name]: target.value})
  };

  onFileUpload = ({ target }) => {
    this.setState({ url: window.URL.createObjectURL(target.files[0])})
  }

  memeToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('image'))
      .then(img => {
        this.setState({ img });
      });
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.url);
  };

  render() {
    const { topText, bottomText, font, textColor, img, url } = this.state;

    return (
      <Fragment>
        <h1>memes? where we're going, we're gonna need memes</h1>

        <form className={styles.form}>
          <label htmlFor="url">Enter an image URL:</label>
          <input type="url" name="url" id="url" placeholder="http://example.com" onChange={this.onChange} value={url}/>

          <label htmlFor="upload">Upload your own image:</label>
          <input type="file" id="upload" name="upload" accept=".jpg,.gif,.png,.svg" onChange={this.onFileUpload}/>

          <label htmlFor="topText">Top Text:</label>
          <input name="topText" id="topText" placeholder="this is your top text" onChange={this.onChange} value={topText}/>

          <label htmlFor="bottomText">Bottom Text:</label>
          <input name="bottomText" placeholder="this is your bottom text" onChange={this.onChange} value={bottomText}/>
        </form>

        <div className={styles.image} id="image">
          <img src={url} id="meme-pic"/>
          <span id="meme-top" className="top">{topText}</span>
          <span id="meme-bottom" className="bottom">{bottomText}</span>
          {img && <button onClick={this.saveImage}>Save your meme!</button>}
        </div>

      </Fragment>
    );
  };
}