import React, { Component, Fragment } from 'react';
import styles from './App.css';
import fileSaver from 'file-saver';
import domToImage from 'dom-to-image';
export default class  App extends Component {
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
        const fontOptions = ['Arial', 'Times New Roman', 'Garamond', 'Helvetica'].map(font => {
            return <option key={font} value={font}>{font}</option>;
        });
        let input = <input type="text" name="img" value={img} onChange={this.onChange}/>;
        if(imgSource === 'Upload') {
            input = <input type="file" name="img" onChange={this.onUpload}/>;
        }
        let topTextInput = <input type="text" name="topText" value={topText} onChange={this.onChange}/>;
        let bottomTextInput = <input type="text" name="bottomText" value={bottomText} onChange={this.onChange}/>;

        let topStyles = {
            color: topColor,
            fontFamily: font
        };

        let bottomStyles = {
            color: bottomColor,
            fontFamily: font
        };

        return (
            <Fragment>
                <h1>Meme Generator</h1>
                <form onSubmit={this.memeToImage}>
                    
                    <label> Image Source:<br/>
                        <select name="imgSource" defaultValue={imgSource} onChange={this.onChange}>
                            {options}
                        </select>
                    </label><br/>
                    <label> Image:<br/>
                        {input}
                    </label><br/>
                    <label>Meme Font:<br/>
                        <select name="font" defaultValue={font} onChange={this.onChange}>
                            {fontOptions}
                        </select><br/>
                    </label>
                    <label>Text Color 2:<br/>
                        <select name="topColor" defaultValue={topColor} onChange={this.onChange}>
                            {topColorOptions}
                        </select><br/>
                    </label>
                    <label>Top of Image Text:<br/>
                        {topTextInput}
                    </label><br/>
                    <label>Text Color 2:<br/>
                        <select name="bottomColor" defaultValue={bottomColor} onChange={this.onChange}>
                            {bottomColorOptions}
                        </select><br/>
                    </label>
                    <label>Bottom of Image Text:<br/>
                        {bottomTextInput}
                    </label><br/>
                    <button>Create Image</button>
                </form>
                <div className={styles.card} id="meme">                    {img && <img src={img}/>}
                    <p className={styles.topText} style={topStyles}>{topText}</p>
                    <p className={styles.bottomText} style={bottomStyles}>{bottomText}</p>
                </div>
                <button onClick={this.saveImage}>Save Image</button>
            </Fragment>
        );
    }
}
