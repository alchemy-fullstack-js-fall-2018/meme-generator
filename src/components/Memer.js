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
    font: '',
    color: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  saveMeme = (event) => {

    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(meme => fileSaver.saveAs(meme));

  }

  render() {

    const { img, headerText, footerText } = this.state;


    return (
      <Fragment>
        <form onSubmit={this.saveMeme}>
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
          <button type="submit">Save meme!</button>
        </form>
        <div id="meme" className={styles.meme}>
          <img className={styles.memeImage} src={img} />
          <div className={styles.memeText}>
            <p className={styles.top}>{headerText}</p>
            <p className={styles.bottom}>{footerText}</p>
          </div>
        </div>
      </Fragment>
    );
  }


}
