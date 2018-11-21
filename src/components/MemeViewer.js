import React, { Component, Fragment } from 'react';
import styles from './MemeViewer.css';



export default class Uploader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Fragment>
        <div className={styles.meme} id='meme'>
          <img className={styles.image} id="image" src={source} alt='meme image' />
          <div className={styles.memeText}>
            <span className={styles.header} id={header} style={{ color, fontFamily }}>
              {header}
            </span>
            <span className={styles.footer} id={footer} style={{ color, fontFamily }}>
              {footer}
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}
