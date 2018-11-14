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
    img: '',
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

  textToImage = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('image'))
      .then(img => {
        this.setState({ img });
      });
  };

  // fontToImage = (event) => {
  //   event.preventDefault();
  //   domToImage.toPng(document.getElementById('image'))
  //     .then(img => {
  //       this.setState({ img });
  //     });
  // };

  saveImage = () => {
    fileSaver.saveAs(this.state.img);
  };

  render() {
    const { font, text, formatedText, img } = this.state;
    const options = ['Standard', 'Bell', '3-D', 'Avatar', 'Barbwire'].map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    // const colorsOptions = ['Blue', 'Red', 'Green', 'Green', 'Magenta'].map(color => {
    //   return <option key={color} value={color}>{color}</option>;
    // });

    return (
      <Fragment>
        <form onSubmit={this.textToImage}>
          <select name="font" defaultValue={font} onChange={this.onChange}>
            {options}
          </select>

          <select name="color" defaultValue={color} onChange={this.onChange}>
          {colorsOptions}
          </select>


          <input name="text" placeholder="put text here" value={text} onChange={this.onChange} />
          <button type="submit">Create Image</button>

        <div id="images">
        <label for="url">Enter image URL or upload image</label>
        <input type="url" name="url" id="url" placeholder="Enter Image URL" value={url} onChange={this.onChange} />
        </div>
        <div className={styles.image}>
          <span id="image" >
            {formatedText}
          </span>
        </div>
        {img && <img src={img} />}
        {img && <button onClick={this.saveImage}>Save Image</button>}

        </form>




      </Fragment>
    );
  }


}
