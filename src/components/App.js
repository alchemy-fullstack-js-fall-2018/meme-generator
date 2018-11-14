import React, { Component, Fragment } from 'react';
import styles from './App.css';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';
export default class App extends Component {

  state = {
    url: 'http://static.origos.hu/s/img/i/1801/20180108doge-dogecoin-kriptovaluta.jpg',
    header: 'Much',
    footer: 'Disappoint',
    font: 'fantasy',
    color: { color: 'white' }
  };

  handleChosenFile = ({ target }) => {
    let url = window.URL.createObjectURL(target.files[0])
    this.setState({ url })
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  changeColor = ({ target }) => {
    this.setState({ [target.name]:{ [target.name]: target.value }});
  };

  saveMeme = (event) => {
    event.preventDefault();
    domToImage.toPng(document.getElementById('meme'))
      .then(meme => fileSaver.saveAs(meme));
  };

  render() {
    const { url, header, footer, font, color} = this.state;
    const options = ['helvetica', 'open-sans', 'serif', 'monospace', 'cursive', 'fantasy'].map(font => {
      return <option key={font} value={font}>{font}</option>
    })

    const colorOptions = ['White', 'Yellow', 'Blue', 'Pink', 'Purple', 'Red'].map(color => {
        return <option key={color} value={color}>{color}</option>
    })
    return (
      <Fragment>
        <h1>Lets Make Some Memes!</h1>
        <form onSubmit={this.saveMeme} className="form">
          <label htmlFor="url">Paste a Url:</label><br/>
          <input name="url" placeholder="Add an Image URL" value={url} onChange={this.onChange}/><br/>
          <p>OR</p>
          <label htmlFor="file">Upload an Image:</label><br/>
          <input name="file" type="file" onChange={this.handleChosenFile}/><br/>
          <input name="header" placeholder="Add Header" value={header} onChange={this.onChange}/><br/>
          <input name="footer" placeholder="Add Footer" value={footer} onChange={this.onChange}/><br/>
          <label htmlFor="font">Font Type:</label>
          <select name="font" defaultValue={font} onChange={this.onChange}>
            {options}
          </select><br/>
          <label htmlFor="color">Color Type:</label>
          <select name="color" defaultValue={color} onChange={this.changeColor}>
            {colorOptions}
          </select><br/>
          <button type="submit">Save This Meme</button>
        </form>
        <div id="meme" className={styles.meme}>
          <img id="img"src={url} alt="meme" className={styles.image}/>
          <div className={styles.text}>
            <div className={styles.header}>
              <span className={styles[font]} style={color}>{header.toUpperCase()}</span>
            </div>
            <div className={styles.footer}>
              <span className={styles[font]} style={color}>{footer.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </Fragment>
    )
  };
}