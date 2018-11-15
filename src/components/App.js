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
    color: 'white',
    font: 'helvetica',
    topText: '',
    bottomText: '',
    selectedImg: '',
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

    const {
      color,
      font,
      topText,
      bottomText,
      selectedImg,
      memeImg,
    } = this.state;

    const options = imageMap.map(img => {
      return (
        <option key={img.title} value={img.src}>
          {img.title}
        </option>
      );
    });

    const fontOptions = ['courrier', 'helvetica', 'arial'].map(font => (
      <option key={font} value={font}>
        {font}
      </option>
    ));

    const fontToStyle = {
      fontFamily: font,
      color: color
    };

    return (
      <div className={styles.generator}>
        <h1>React Meme Generator</h1>

        <section className={styles.formHolder}>
          <form onSubmit={this.memeToImage}>
            <label name="selectedImg">Choose an image:</label>
            <select
              name="selectedImg"
              defaultValue={selectedImg}
              onChange={this.onChange}
            >
              {options}
            </select>
            <select name="font" defaultValue={font} onChange={this.onChange}>
              {fontOptions}
            </select>
            <label name="color">Choose a color:</label>
            <input
              name="color"
              type="color"
              value={color}
              onChange={this.onChange}
            />
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
            <button type="submit">Create Meme</button>
          </form>
        </section>

        <section id="meme" className={styles.meme}>
          <div className={styles.topText}>
            <p style={fontToStyle}>{topText}</p>
          </div>
          <img src={selectedImg} />
          <div className={styles.bottomText}>
            <p style={fontToStyle}>{bottomText}</p>
          </div>
        </section>

        {memeImg && <img src={memeImg} />}
        {memeImg && <button onClick={this.saveImage}>Save Image</button>}
      </div>
    );
  }
}
