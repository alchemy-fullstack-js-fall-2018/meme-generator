import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Memer.css';

export default class App extends Component {


  state = {
    img: 'https://i.imgur.com/rbXZcVH.jpg',
    headerText: 'top',
    footerText: 'bottom',
    font: '',
    color: ''
  };

  render() {

    return (
      <Fragment>
        <form>
          <label htmlFor="headerText">Top text</label>
          <input name="headerText"></input>
          <label htmlFor="footerText">Bottom text</label>
          <input name="footerText"></input>
        </form>
        <div className={styles.meme}>
          <img className={styles.memeImage} src={this.state.img} />
          <div className={styles.memeText}>
            <p className={styles.top}>{this.state.headerText}</p>
            <p className={styles.bottom}>{this.state.footerText}</p>
          </div>
        </div>
      </Fragment>
    );
  }


}
