import React, { Component, Fragment } from 'react';
import Styles from './App.css';

export default class App extends Component {
  state = {
    imageSrc: '',
    topText: '',
    bottomText: ''
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  onImageUpload = ({ target }) => {
    this.setState({ imageSrc: window.URL.createObjectURL(target.files[0]) });
  };


  render() {
    const { imageSrc, topText, bottomText } = this.state;
    
    return (
      <Fragment>
        <input name="image" type="file" accept="image/*" onChange={this.onImageUpload} />
        <input name="imageSrc" value={imageSrc} onChange={this.onInputChange} />
        <input name="topText" value={ topText } onChange={this.onInputChange}/>
        <input name="bottomText" value={ bottomText } onChange={this.onInputChange} />
      
        <div className="meme">
          <p className="topText">{topText}</p>
          <img src={imageSrc}/>
          <p className="bottomText">{bottomText}</p>
        </div>
      </Fragment>
    );
  }
}
