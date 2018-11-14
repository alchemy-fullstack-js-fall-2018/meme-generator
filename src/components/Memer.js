import React, { Component, Fragment } from 'react';

import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';


import styles from './Memer.css';

export default class App extends Component {


  state = {
    img: 'https://i.imgur.com/cfkKYcR.png',
    headerText: 'Wrote a meme maker',
    footerText: 'nobody used it',
    font: 'Papyrus',
    color: 'green',
    size: '46'
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

    const { img, headerText, footerText, font, color, size } = this.state;

    const fontOptions = [
      'Roboto', 'Allerta Stencil', 'Archivo',
      'Open Sans', 'Mongserrat', 'Paprika',
      'Comic Sans MS', 'Papyrus'
    ]
      .map(font => <option key={font} value={font}>{font}</option>);

    const textStyle = (direction) => {

      return {
        position: 'absolute',
        [direction]: '8px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: color,
        fontFamily: font,
        fontSize: `${size}px`
      };

    };

    return (
      <Fragment>
        <form onSubmit={this.saveMeme}>
          <div className={styles.memeForm}>
            <label htmlFor="img">Image</label>
            <input
              name="img" type="text"
              value={img} onChange={this.onChange}
            ></input>

            <label htmlFor="headerText">Top text</label>
            <input
              name="headerText" type="text"
              value={headerText} onChange={this.onChange}
            ></input>

            <label htmlFor="footerText">Bottom text</label>
            <input
              name="footerText" type="text"
              value={footerText} onChange={this.onChange}
            ></input>

            <label htmlFor="color">Text color</label>
            <input
              name="color" type="color"
              value={color} onChange={this.onChange}
            ></input>

            <label htmlFor="font">Font</label>
            <select
              name="font" defaultValue={font}
              onChange={this.onChange}
            >{fontOptions}
            </select>

            <label htmlFor="size">Text size</label>
            <input
              name="size" value={size}
              type="number" onChange={this.onChange}
            ></input>
          </div>

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
