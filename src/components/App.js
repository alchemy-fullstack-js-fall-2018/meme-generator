import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Memer from './Memer.js';
import Header from './Header.js';
import Footer from './Footer.js';

import styles from './App.css';

export default class App extends Component {


  render() {

    return (
      <main className={styles.main}>
        <Header />
        <Memer/>
        <Footer/>
      </main>
    );
  }


}
