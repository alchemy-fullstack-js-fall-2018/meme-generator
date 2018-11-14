import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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

  render() {

    const { img, headerText, footerText } = this.state;


    return (
      <Fragment>
        <form>
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
        </form>
        <div className={styles.meme}>
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
