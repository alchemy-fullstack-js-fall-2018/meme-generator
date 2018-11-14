import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';


import styles from './Memer.css';

export default class App extends Component {


  state = {
    img: 'https://i.imgur.com/cfkKYcR.png',
    headerText: 'Wrote a meme maker',
    footerText: 'nobody used it',
    font: 'montserrat',
    color: 'purple'
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  saveMeme = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(meme => fileSaver.saveAs(meme));
  };

  render() {

    const { img, headerText, footerText, font, color } = this.state;

    const fontOptions = [
      'Roboto', 'Allerta Stencil', 'Archivo',
      'Open Sans', 'Mongserrat', 'Paprika'
    ]
      .map(font => <option key={font} value={font}>{font}</option>);


    const textStyle = (direction) => {

      return {
        position: 'absolute',
        [direction]: '8px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: color,
        fontFamily: font
      };

    };



    return (
      <Fragment>
        <form onSubmit={this.saveMeme}>
          <label htmlFor="img">Top text</label>
          <input
            name="img"
            value={img}
            onChange={this.onChange}
          ></input>
          <label htmlFor="headerText">Top text</label>
          <input
            name="headerText"
            value={headerText}
            onChange={this.onChange}
          ></input>
          <label htmlFor="footerText">Bottom text</label>
          <input
            name="footerText"
            value={footerText}
            onChange={this.onChange}
          ></input>
          <label htmlFor="color">Text color</label>
          <input
            name="color"
            value={color}
            type="color"
            onChange={this.onChange}
          ></input>
          <select
            name="font"
            defaultValue={font}
            onChange={this.onChange}
          >
            {fontOptions}
          </select>
          <button type="submit">Save meme!</button>
        </form>
        <div id="meme" className={styles.meme}>
          <img className={styles.memeImage} src={img} />
          <div className={styles.memeText}>
            <p style={textStyle('top')}>{headerText}</p>
            <p  style={textStyle('bottom')}>{footerText}</p>
          </div>
        </div>
      </Fragment>
    );
  }


}
