import React, { Component, Fragment } from 'react';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  state = {
    header: '',
    footer: '',
    font: '',
    color: '#000000',
    size: 90,
    imageURL: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  onSizeChange = (newSize) => {
    this.setState({ size: newSize })
  }

  onImageUpload = ({target}) => {
    this.setState({ imageURL: window.URL.createObjectURL(target.files[0]) });
  }

  downloadImage = (event) => {
    event.preventDefault();
    const imageElement = document.getElementById('imageContainer');
    domToImage.toPng(imageElement)
      .then(img => {
        console.log(img);
        this.setState({ image: img });
      })
      .then(() => {
        fileSaver.saveAs(this.state.image)
      });
  };

  render () {

    const { header, footer, font, size, color, imageURL, image } = this.state;

    const imageContainerStyle = {
      position: 'relative',
      margin: 'auto',
      fontFamily: font,
      fontWeight: 'bold',
      color: color,
      fontSize: size
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

        <form onSubmit={this.downloadImage}>
          <fieldset>
            <legend>Options</legend>
            <label htmlFor="header">Header: </label>
            <input name="header" placeholder="enter header here" value={header} onChange={this.onChange} />
            <br />

            <label htmlFor="footer">Footer: </label>
            <input name="footer" placeholder="enter footer here" value={footer} onChange={this.onChange} />
            <br />

            <label htmlFor="font">Font family: </label>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
            <br />

            <label htmlFor="color">Font color: </label>
            <input name="color" value={color} type="color" onChange={this.onChange} />
            <br />

            <label htmlFor="size">Font size: </label>
            <button type="button" onClick={() => this.onSizeChange(size - 2)}>-</button>
            <button type="button" onClick={() => this.onSizeChange(size + 2)}>+</button>
            <br />

            <label htmlFor="imageURL">Image URL</label>
            <input name="imageURL" type="text" onChange={this.onChange} /><br />

            <label htmlFor="imageUpload"></label>
            <input name="imageUpload" type="file" accept="image/*" onChange={this.onImageUpload} />
          </fieldset>
          <br />

          <div id="imageContainer" style={imageContainerStyle}>
            {imageURL && <img src={imageURL} />}
            <div style={headerStyle}>{header}</div>
            <div style={footerStyle}>{footer}</div>
          </div>

          <button type="submit">Download Meme</button>
        </form>
      </Fragment>
    )
  }
}