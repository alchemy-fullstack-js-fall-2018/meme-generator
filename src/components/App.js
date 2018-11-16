import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
import styles from './App.css';

export default class App extends Component {

  state = {
    header: 'header text',
    footer: 'footer text',
    font: 'Courier',
    color: '#008000',
    size: '24px',
    imageURL: 'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg',
    image: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  onImageUpload = ({target}) => {
    this.setState({ imageURL: window.URL.createObjectURL(target.files[0]) })
  }

  textToImage = (event) => {
    event.preventDefault();
    const imageElement = document.getElementById('imageContainer');
    domToImage.toPng(imageElement)
      .then(img => {
        console.log(img);
        this.setState({ image: img });
      })
      .catch(console.error)
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.image);
  };

  render () {

    const { header, footer, font, color, imageURL, image } = this.state;

    const imageContainerStyle = {
      position: 'relative',
      fontFamily: font,
      color: color
    }
    const headerStyle = {
      position: 'absolute',
      top: '15px',
      left: '15px'
    }
    const footerStyle = {
      position: 'absolute',
      bottom: '15px',
      left: '15px'
    }

    const fontOptions = ['Times', 'Courier', 'Arial'].map(font => {
      return <option key={font} value={font}>{font}</option>
    });

    return (
      <Fragment>
        <h1>Meme Generator</h1>

        <form onSubmit={this.textToImage}>
          <fieldset>
            <legend>Options</legend>
            <label htmlFor="header">Header: </label>
            <input name="header" placeholder="enter header here" value={header} onChange={this.onChange} />


            <label htmlFor="footer">Footer: </label>
            <input name="footer" placeholder="enter footer here" value={footer} onChange={this.onChange} />

            <label htmlFor="font">Font family: </label>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
            <p>{font}</p>

            <label htmlFor="color">Font color: </label>
            <input name="color" value={color} type="color" onChange={this.onChange} />
            <p>{color}</p>

            <label htmlFor="imageURL">Image URL</label>
            <input name="imageURL" type="text" onChange={this.onChange} /><br />

            <label htmlFor="imageUpload"></label>
            <input name="imageUpload" type="file" accept="image/*" onChange={this.onImageUpload} />
            <p>{imageURL}</p>
            <button type="submit">Create Image</button>
          </fieldset>
        </form>

        <span id="imageContainer" style={imageContainerStyle}>
          {imageURL && <img src={imageURL} />}
          <div style={headerStyle}>{header}</div>
          <div style={footerStyle}>{footer}</div>
        </span>
        {image && <img src={image} />}
        {imageURL && <button onClick={this.saveImage}>Save Image</button>}
      </Fragment>
    )

  }

}