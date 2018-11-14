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
    text: '',
    formatedText: '',
    img: 'http://i.imgflip.com/2mk6g6.jpg',
    color: ''
  };

  onChange = ({ target }) => {
    // setState in async. It waits for all components to update
    this.setState({ [target.name]: target.value, img: '' }, () => {
      const { text, font, color, img } = this.state;
      figlet.text(text, { font, color, img }, (err, formatedText) => {
        this.setState({ formatedText });
      });
    });
  };

  saveMeme = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('memeImage'))
      .then(memeImage => {
        this.setState({ memeImage });
      });
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {
    const { font, text, formatedText, img, color  } = this.state;
    const fontOptions = ['Standard', 'Bell', '3-D', 'Avatar', 'Barbwire'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    const memeTextStyles = () => {
      return {
        color: color
      }
    }


    return (
      <Fragment>
        <form onSubmit={this.saveMeme}>
          <div id="images">
            <label htmlFor="img">Enter image URL or upload image</label>
            <input type="text" name="img" id="url" placeholder="Enter Image URL" value={img} onChange={this.onChange} />
          </div>

          <label htmlFor="font">Select Font</label>
          <select name="font" defaultValue={font} onChange={this.onChange}>
            {fontOptions}
          </select>

          <label htmlFor="color">Choose Text Color:</label>
          <input
            name="color" type="color" value={color} onChange={this.onChange}>
          </input>

          <input name="text" placeholder="put text here" value={text} onChange={this.onChange} />
          <button type="submit">Save meme</button>
          </form>


        <div className={styles.image}>
          <span id="memeImage" >
            {formatedText}
          </span>
        </div>
        {img && <img src={img} />}
        {img && <button onClick={this.saveImage}>Save Image</button>}





      </Fragment>
    );
  }


}
