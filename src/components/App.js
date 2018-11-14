import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';

import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    header: 'Meme',
    footer: 'Me!',
    color: { color: 'Yellow' },
    font: 'Standard',
    source:
      'http://static.origos.hu/s/img/i/1801/20180108doge-dogecoin-kriptovaluta.jpg',
    sourceType: 'url',
    file: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  uploadFile = ({ target }) => {
    let source = window.URL.createObjectURL(target.files[0]);
    this.setState({ source });
  }

  memeToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(file => {
        fileSaver.saveAs(file);
      });
  }


  render() {

    const { header, footer, color, font, source } = this.state;
    const colorOptions = ['Yellow', 'Red', 'White', 'Black'].map(color => {
      return <option key={color} value={color}>{color}</option>;
    });
    const fontOptions = ['Standard', 'Banner', 'Alligator2', 'Alpha'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <Fragment>
        <h1>Who is ready to Meme?</h1>

        <form onSubmit={this.memeToImage}>
          <div id='uploader'>
            <label htmlFor='source'>Type in the image URL here:</label>
            <input name='source'id='source' type='source' value={source} onChange={this.onChange} />
            <h3>or</h3>
            <label htmlFor='file'>Upload image from you computer</label>
            <input name="file" id="file" type="file" onChange={this.uploadFile}/>
          </div>

          <div id='textInput'>
            <label htmlFor='header'>Header:</label>
            <input name='header' id='header' type='header' value={header} onChange={this.onChange} />

            <label htmlFor='footer'>Footer:</label>
            <input name='footer' id='footer' type='footer' value={footer} onChange={this.onChange} />

            <label htmlFor='color'>Text Color</label>
            <select name='color' id='color' defaultValue={color} onChange={this.onChange}>
              {colorOptions}
            </select>

            <label htmlFor='font'>Text Font</label>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
          </div>

          <button type="submit">Save Meme</button>
        </form>

        <div className={styles.meme} id='meme'>
          <img className={styles.image} id="image" src={source} alt='meme image' />
          <div className={styles.memeText}>
            <span className={styles.header} id={header}>
              {header}
            </span>
            <span className={styles.footer} id={footer}>
              {footer}
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}
