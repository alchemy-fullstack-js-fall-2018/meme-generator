import React, { Component, Fragment } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

// import domToImage from 'dom-to-image';
// import fileSaver from 'file-saver';
// import styles from './App.css';
const imageMap = [
  {
    title: 'drake',
    src: image1
  },
  {
    title: 'austin',
    src: image2
  },
  {
    title: 'leo',
    src: image3
  }
];

export default class App extends Component {
  state = {
    topText: '',
    bottomText: '',
    selectedImg: image1
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { topText, bottomText, selectedImg } = this.state;
    const options = imageMap.map(img => {
      return (
        <option key={img.title} value={img.src}>
          {img.title}
        </option>
      );
    });

    return (
      <Fragment>
        <form>
          <select
            name="selectedImg"
            defaultValue={selectedImg}
            onChange={this.onChange}
          >
            {options}
          </select>
        </form>
        <input
          name="topText"
          value={topText}
          placeholder="top text"
          onChange={this.onChange}
        />
        <input
          name="bottomText"
          value={bottomText}
          placeholder="bottom text"
          onChange={this.onChange}
        />
        {bottomText}
        {topText}
        <img src={selectedImg} />
      </Fragment>
    );
  }
}
