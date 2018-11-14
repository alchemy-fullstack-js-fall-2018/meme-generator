import React, { Component, Fragment } from 'react';
import styles from './App.css';
export default class App extends Component {

  state = {
    url: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
    header: '',
    footer: '',
  }



  handleChosenFile = ({ target }) => {
    let url = window.URL.createObjectURL(target.files[0])
    this.setState({ url })
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { url, header, footer } = this.state;
    return (
      <Fragment>
        <h1>Lets Make Some Memes!</h1>
        <form>
          <input name="url" placeholder="Add an Image URL" value={url} onChange={this.onChange}/><br/>
          <input name="file" type="file" onChange={this.handleChosenFile}/><br/>
          <input name="header" placeholder="Add Header" value={header} onChange={this.onChange}/><br/>
          <input name="footer" placeholder="Add Footer" value={footer} onChange={this.onChange}/><br/>
          <button type="submit">Save This Meme</button>
        </form>
        <div id="meme" className={styles.meme}>
          <img id="img"src={url} alt="meme" className={styles.image}/>
          <div className={styles.text}>
            <span className={styles.header}>{header}</span>
            <span className={styles.footer}>{footer}</span>
          </div>
        </div>
      </Fragment>
    )
  }
}