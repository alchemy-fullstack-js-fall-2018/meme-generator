import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';

export default class App extends Component {


  render() {

    return (
      <header className={styles.header}>
        <h1>MEME GENERATOR 9000</h1>
        <p>use with caution</p>
      </header>
    );
  }


}
