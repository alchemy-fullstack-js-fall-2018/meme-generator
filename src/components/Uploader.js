import React, { Component, Fragment } from 'react';


export default class Uploader extends Component {


  render() {
    return (
      <Fragment>
        <div id='uploader'>
          <label htmlFor='source'>Type in the image URL here:</label>
          <input name='source'id='source' type='source' onChange={this.onChange} />
          <h3>or</h3>
          <label htmlFor='file'>Upload image from you computer</label>
          <input name="file" id="file" type="file" onChange={this.uploadFile}/>
        </div>;
      </Fragment>
    );
  }
}
