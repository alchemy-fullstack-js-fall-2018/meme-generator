import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default class App extends Component {

  state = {
    header: '',
    footer: '',
    font: '',
    color: '',
    image: ''
  }

  onChange = ({ target }) => {
    this.setState( { [target.name]: target.value })
  }

render () {

  const { header, footer, font, color, image } = this.state;
  const fontOptions = ['Times', 'Courier', 'Arial'].map(font => {
    return <option key={font} value={font}>{font}</option>
  });

  return (
    <Fragment>
      <h1>Meme Generator</h1>
      <label htmlFor="header">Header: </label>
      <input name="header" placeholder="enter header here" value={header} onChange={this.onChange} />
      <p>{header}</p>
      <label htmlFor="footer">Footer: </label>
      <input name="footer" placeholder="enter footer here" value={footer} onChange={this.onChange} />
      <p>{footer}</p>
      <label htmlFor="font">Font family: </label>
      <select name="font" defaultValue={font} onChange={this.onChange}>
        {fontOptions}
      </select>
      <p>{font}</p>
      <label htmlFor="color">Font color: </label>
      <input name="color" value={color} type="color" onChange={this.onChange} />
      <p>{color}</p>
      <label htmlFor="image"></label>
      <input name="image" type="file" accept="image/*" onChange={this.onChange} />
      {/* {image && <img src={image} />} */}
      <p>{image}</p>
    </Fragment>
  )

}

}