import React, { Component, Fragment } from 'react';
import styles from './App.css';
import fileSaver from 'file-saver';
import domToImage from 'dom-to-image';
export default class App extends Component {
    state = {
        imgSource: 'URL',
        img: '',
        topText: '',
        bottomText: '',
        topColor: 'white',
        bottomColor: 'white',
        memeImg: '',
        font: ''
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onUpload =  ({ target }) => {
        let imgURL = window.URL.createObjectURL(target.files[0]);
        this.setState({ img: imgURL });
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
        const { imgSource, img, topText, bottomText, topColor, bottomColor, font } = this.state;
        const options = ['URL', 'Upload'].map(imgSource => {
            return <option key={imgSource} value={imgSource}>{imgSource}</option>;
        });
        const topColorOptions = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'grey'].map(topColor => {
            return <option key={topColor} value={topColor}>{topColor}</option>;
        });
        const bottomColorOptions = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'grey'].map(bottomColor => {
            return <option key={bottomColor} value={bottomColor}>{bottomColor}</option>;
        });
        const fontOptions = ['Arial', 'Times New Roman', 'Garamond', 'Comic Sans'].map(font => {
            return <option key={font} value={font}>{font}</option>;
        });
        let input = <input type="text" name="img" value={img} onChange={this.onChange}/>;
        if(imgSource === 'Upload') {
            input = <input type="file" name="img" onChange={this.onUpload}/>;
        }
        let topTextInput = <input type="text" name="topText" value={topText} onChange={this.onChange}/>;
        let bottomTextInput = <input type="text" name="bottomText" value={bottomText} onChange={this.onChange}/>;

        return (
            <Fragment>
                <h1>Hello Meme Generator</h1>
                <form onSubmit={this.memeToImage}>
                    <select name="imgSource" defaultValue={imgSource} onChange={this.onChange}>
                        {options}
                    </select>
                    {input}
                    <select name="font" defaultValue={font} onChange={this.onChange}>
                        {fontOptions}
                    </select>
                    <select name="topColor" defaultValue={topColor} onChange={this.onChange}>
                        {topColorOptions}
                    </select>
                    {topTextInput}
                    <select name="bottomColor" defaultValue={bottomColor} onChange={this.onChange}>
                        {bottomColorOptions}
                    </select>
                    {bottomTextInput}
                    <button>Create Image</button>
                </form>
                <div className={styles.card} style={ { fontFamily: font } } id="meme">                    {img && <img src={img}/>}
                    <p className={styles.topText} style={ { color: topColor } }>{topText}</p>
                    <p className={styles.bottomText} style={{ color: bottomColor }}>{bottomText}</p>
                </div>
                <button onClick={this.saveImage}>Save Image</button>
            </Fragment>
        );
    }
}

// objectURL = URL.createObjectURL(object);
// target.files[0]
