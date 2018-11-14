import React, { Component, Fragment } from 'react';
// import domToImage from 'dom-to-image';
// import fileSaver from 'file-saver';
// import styles from './App.css';

export default class App extends Component {
  state = {
    topText: '',
    bottomText: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { topText, bottomText } = this.state
    const options = ['image1', 'image2', 'image3', 'image4', 'image5'].map(img => {
      return <option key={img} value={img}>{img}</option>;
    });

    return (
      <Fragment>
        <form>
          <select>
            {options}
          </select>
        </form>
        <input name="topText" value={topText} placeholder="top text" onChange={this.onChange} />
        <input name="bottomText" value={bottomText} placeholder="bottom text" onChange={this.onChange} />
      </Fragment>
    );

  }
}
