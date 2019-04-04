import React, { Component } from 'react';

class Editor extends Component {
  render() {
    return (
      <div>
        <div className="Editor-pane-right">
          <div className="Editor-navigation">
            <div>
            Template
            </div>
            <div>
            Topics
            </div>
            <div>
            Subtopics card
            </div>
            <div>
            Subtopic content
            </div>
            <div>
            Export
            </div>
          </div>
          <div className="Editor-body">
            Editor Body
          </div>
        </div>
        <div className="Editor-pane-left">
        Left Side
        </div>
      </div>
    );
  }
}

export default Editor;