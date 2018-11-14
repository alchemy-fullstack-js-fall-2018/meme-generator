import React, { Component, Fragment } from 'react';

export default class App extends Component {
  state = {
    imageSrc: '',
    topText: '',
    bottomText: ''
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };


  render() {
    const { imageSrc, topText, bottomText } = this.state;
    
    return (
      <Fragment>
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
