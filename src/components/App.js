import React, { Component, Fragment } from 'react';
import styles from './App.css';
export default class App extends Component {
    state = {
        imgSource: 'URL',
        img: '',
        topText: '',
        bottomText: '',
        topColor: 'white',
        bottomColor: 'white'
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onUpload =  ({ target }) => {
        console.log('files[0]', target.files[0]);
        let imgURL = window.URL.createObjectURL(target.files[0]);
        console.log('imgURL', imgURL);
        this.setState({ img: imgURL });
    };

    render() {
        const { imgSource, img, topText, bottomText, topColor, bottomColor } = this.state;
        const options = ['URL', 'Upload'].map(imgSource => {
            return <option key={imgSource} value={imgSource}>{imgSource}</option>;
        });
        const topColorOptions = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'grey'].map(topColor => {
            return <option key={topColor} value={topColor}>{topColor}</option>;
        });
        const bottomColorOptions = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'grey'].map(bottomColor => {
            return <option key={bottomColor} value={bottomColor}>{bottomColor}</option>;
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
                <form>
                    <select name="imgSource" defaultValue={imgSource} onChange={this.onChange}>
                        {options}
                    </select>
                    {input}
                    <select name="topColor" defaultValue={topColor} onChange={this.onChange}>
                        {topColorOptions}
                    </select>
                    <select name="bottomColor" defaultValue={bottomColor} onChange={this.onChange}>
                        {bottomColorOptions}
                    </select>
                    {topTextInput}
                    {bottomTextInput}
                </form>
                {img && <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
                    <p className={styles.topText} style={{ color: topColor }}>{topText}</p>
                    <p className={styles.bottomText} style={{ color: bottomColor }}>{bottomText}</p>
                </div>}
            </Fragment>
        );
    }
}

// objectURL = URL.createObjectURL(object);
// target.files[0]
