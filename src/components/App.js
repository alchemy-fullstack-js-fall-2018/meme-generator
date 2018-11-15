import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component {
  state = {
    topText: '',
    bottomText: '',
    font: 'Impact',
    textColor: '',
    imgSrc: '',
    img: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value})
  };

  onFileUpload = ({ target }) => {
    this.setState({ imgSrc: window.URL.createObjectURL(target.files[0])})
  }

  memeToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(file => {
        fileSaver.saveAs(file);
      });
  };

  render() {
    const { topText, bottomText, font, textColor, imgSrc, img } = this.state;

    const fonts = ['Impact', 'Comic Sans MS', 'Courier New'].map(
      font => <option key={font} value={font}>{font}</option>
    );

    const textStyle = () => {
      return {
        color: textColor,
        fontFamily: font
      }
    };

    return (
      <Fragment>
        <h1>memes? where we're going, we're gonna need memes</h1>

        <form onSubmit={this.memeToImage} className={styles.form}>
          <label htmlFor="url">Enter an image URL:</label>
          <input type="url" name="imgSrc" id="url" placeholder="http://example.com" onChange={this.onChange}/>

          <label htmlFor="upload">Upload your own image:</label>
          <input type="file" id="upload" name="upload" accept=".jpg,.gif,.png,.svg" onChange={this.onFileUpload}/>

          <label htmlFor="topText">Top Text:</label>
          <input name="topText" id="topText" placeholder="this is your top text" onChange={this.onChange} value={topText}/>

          <label htmlFor="bottomText">Bottom Text:</label>
          <input name="bottomText" placeholder="this is your bottom text" onChange={this.onChange} value={bottomText}/>

          <select name="font" defaultValue={font} onChange={this.onChange}>{fonts}</select>

          <button type="submit">Save that sweet meme</button>
        </form>


        <div className={styles.meme} id="meme">
          <img src={imgSrc} id="memePic" className={styles.image}/>
          <div className={styles.text}>
            <span id="memeTop" className={styles.top} style={textStyle()}>{topText}</span>
            <span id="memeBottom" className={styles.bottom} style={textStyle()}>{bottomText}</span>
          </div>
        </div>

      </Fragment>
    );
  };
}