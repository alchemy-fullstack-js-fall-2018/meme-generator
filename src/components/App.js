import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import fileSaver from 'file-saver';
import styles from './App.css';
import domToImage from 'dom-to-image';

export default class App extends Component {
    state = {
      topText: '',
      bottomText: '',
      imageSrc: '',
      img: ''
    };

    onInputChange = ({ target }) => {
      this.setState({ [target.name]: target.value, img: '' });
    };

    onImageUpload = ({ target }) => {
      this.setState({ imageSrc: window.URL.createObjectURL(target.files[0]) });
    };

    textAndImage = (event) => {
      event.preventDefault();
      domToImage.toPng(document.getElementById('meme'))
        .then(img => {
          fileSaver.saveAs(img);
        });
    };

    saveImage = () => {
    };


    render() {
      const { topText, bottomText, imageSrc } = this.state;
      return (
        <Fragment>
          <form onSubmit={this.textAndImage}>
            <input name="imageFromFile" type="file" accept=".jpg, .png, .svg, .gif" onChange={this.onImageUpload}/>
            <input name="imageSrc" type="text" value={imageSrc} onChange={this.onInputChange}/>
            <input name="topText" placeholder="top text goes here" value={topText} onChange={this.onInputChange}/>
            <input name="bottomText" placeholder="bottom text goes here" value={bottomText} onChange={this.onInputChange}/>
            <button type="submit">Save</button>
          </form>

          <div className="meme" id="meme">
            <p className="topText">{topText}</p>
            <img src={imageSrc}></img>
            <p className="bottomText">{bottomText}</p>
          </div>
        </Fragment>
      );
    }

}
