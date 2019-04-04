import React, { Component } from 'react';

class Upload extends Component {
  render() {
    return (
      <div>
        <div>
        1. Add video URL
          <div>
          <input/>
          </div>
        </div>
        <div>
        2. Add a data JSON File
          <div>
          <button>+ Add JSON file</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
