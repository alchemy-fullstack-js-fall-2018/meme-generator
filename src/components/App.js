import React, { Component, Fragment } from 'react';
export default class App extends Component {
    state = {
        imgSource: 'URL' 
    };

    render() {
        const { imgSource } = this.state;
        const options = ['URL', 'Upload'].map(option => {
            return <option key={option} value={option}>{option}</option>;
        });

        return (
            <Fragment>
                <h1>Hello Meme Generator</h1>
                <form>
                    <select name="imgSource" defaultValue={imgSource}>
                        {options}
                    </select>
                </form>
            </Fragment>
        );
    }
}
