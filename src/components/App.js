import React, { Component, Fragment } from 'react';
import styles from './App.css';
export default class App extends Component {
    state = {
        imgSource: 'URL',
        img: '',
        topText: '',
        bottomText: ''
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

    onText = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    render() {
        const { imgSource, img, topText, bottomText } = this.state;
        const options = ['URL', 'Upload'].map(imgSource => {
            return <option key={imgSource} value={imgSource}>{imgSource}</option>;
        });
        let input = <input type="text" name="img" value={img} onChange={this.onChange}/>;
        if(imgSource === 'Upload') {
            input = <input type="file" name="img" onChange={this.onUpload}/>;
        }
        let topTextInput = <input type="text" name="topText" value={topText} onChange={this.onText}/>;
        let bottomTextInput = <input type="text" name="bottomText" value={bottomText} onChange={this.onText}/>;

        return (
            <Fragment>
                <h1>Hello Meme Generator</h1>
                <form>
                    <select name="imgSource" defaultValue={imgSource} onChange={this.onChange}>
                        {options}
                    </select>
                    {input}
                    {topTextInput}
                    {bottomTextInput}
                </form>
                {img && <div className={styles.card} style={{ backgroundImage: `url(${img})` }}>
                    <p className={styles.topText}>{topText}</p>
                    <p className={styles.bottomText}>{bottomText}</p>
                </div>}
            </Fragment>
        );
    }
}

// objectURL = URL.createObjectURL(object);
// target.files[0]
