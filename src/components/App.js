import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component{

  state = {
    header: 'Meme',
    footer: 'Me!',
    url: 'https://i.ytimg.com/vi/SB-qEYVdvXA/hqdefault.jpg'
  };


  // displayImage = (event) => {
  //   event.preventDefault();
  //   domToImage.toPng(document.getElementById('url'))
  //     .then(img => {
  //       this.setState({ img });
  //     });
  // }
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }



  render() {

    const { header, footer, url } = this.state;

    return (
      <Fragment>
        <h1>Who is ready to Meme?</h1>
        <form>
          <div id="urlUploader">
            <label htmlFor="url">Upload image via URL here</label>
            <input name="url" id="url" type="url" value={url} onChange={this.onChange}/>

            <label htmlFor="header">Header:</label>
            <input name="header" id="header" type="header" value={header} onChange={this.onChange}/>

            <label htmlFor="footer">Footer:</label>
            <input name="footer" id="footer" type="footer" value={footer} onChange={this.onChange}/>
            <button type="submit">Submit</button>
          </div>

        </form>
        <div className={styles.meme} id="meme">
          <img className={styles.image} src={url} alt="meme image"/>
          <div className={styles.memeText}>
            <span className={styles.header} id={header}>{header}</span>
            <span className={styles.footer} id={footer}>{footer}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}


       {/* <h4>or</h4>
          <div id="fileUploader">
          <label htmlFor="file">Upload image from you computer</label>
          <input name="file" id="file" type="file"/>
        </div> */}