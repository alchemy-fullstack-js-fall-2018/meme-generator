import React, { Component, Fragment } from 'react';
import styles from './Uploader.css';


export default class Uploader extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Fragment>
        <div id='uploader'>
          <label htmlFor='source'>Type in the image URL here:</label>
          <input name='source'id='source' type='source' value={props.source} onChange={this.onChange} />
          <h3>or</h3>
          <label htmlFor='file'>Upload image from you computer</label>
          <input name="file" id="file" type="file" onChange={this.uploadFile}/>
        </div>;
      </Fragment>
    )
  }
}
