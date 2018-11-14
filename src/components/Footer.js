import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.css';

export default class App extends Component {


  render() {

    return (
      <footer className={styles.footer}>
        <p>Made to entertain - 2018</p>
      </footer>
    );
  }


}
