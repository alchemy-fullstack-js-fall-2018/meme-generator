import React, { Component } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import styles from './App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

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
    selectedImg: image1,
    memeImg: ''
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  memeToImage = event => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme')).then(memeImg => {
      this.setState({ memeImg });
    });
  };

  saveImage = () => {
    fileSaver.saveAs(this.state.memeImg);
  };

  render() {
    const { topText, bottomText, selectedImg, memeImg } = this.state;
    const options = imageMap.map(img => {
      return (
        <option key={img.title} value={img.src}>
          {img.title}
        </option>
      );
    });

    return (
      <div className={styles.generator}>
        <section className={styles.formHolder}>
          <form onSubmit={this.memeToImage}>
            <select
              name="selectedImg"
              defaultValue={selectedImg}
              onChange={this.onChange}
            >
              {options}
            </select>
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
            <button type="submit">Create Image</button>
          </form>
        </section>
        <section id="meme" className={styles.meme}>
          <div className={styles.topText}>{topText}</div>
          <img src={selectedImg} />
          <div className={styles.bottomText}>{bottomText}</div>
        </section>
        {memeImg && <img src={memeImg} />}
        {memeImg && <button onClick={this.saveImage}>Save Image</button>}
      </div>
    );
  }
}
