import React, { Component, Fragment } from 'react';
import figlet from 'figlet';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';
import PropTypes from 'prop-types';
const colorsOptions = require('colors');

export default class App extends Component {
  state = {
    font: 'Standard',
    textArea: '',
    img: 'http://i.imgflip.com/2mk6g6.jpg',
    color: ''
  };

  onChange = ({ target }) => {
    // setState in async. It waits for all components to update
    this.setState({ [target.name]: target.value });
  };

  saveMeme = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(memeImage => fileSaver.saveAs(memeImage));
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {
    const { font, textArea, img, color  } = this.state;
    const fontOptions = ['Standard', 'Bell', '3-D', 'Avatar', 'Barbwire'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    const memeTextStyles = () => {
      return {
        color: color,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
    }


    return (

      <Fragment>
      <h1>Meme Generator</h1>

        <form onSubmit={this.saveMeme}>
          <div className={styles.labelContainer}>
            <label htmlFor="img">Enter URL</label>
            <input type="text" name="img" id="url" placeholder="Enter Image URL" value={img} onChange={this.onChange} />
          </div>
          <div className={styles.labelContainer}>
            <label htmlFor="font">Select Font</label>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
          </div>
          <div className={styles.labelContainer}>
            <label htmlFor="color">Choose Text Color:</label>
            <input name="color" type="color" value={color} onChange={this.onChange}></input>
          </div>
          <div className={styles.labelContainer}>
            <label htmlFor="textArea">Enter Text here</label>
            <input name="textArea" type="text" value={textArea} onChange={this.onChange} />
          </div>
          <div className={styles.labelContainer}>
            <button type="submit">Save meme</button>
          </div>
        </form>

        <div id="meme" className={styles.meme}>
          <img className={styles.imageMeme} src={img} />
          <div className={styles.memeText}>
            <p style={memeTextStyles()}>
              {textArea}
            </p>
          </div>
        </div>

      </Fragment>
    );
  }


}
