import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import Upload from './Upload.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*Header*/}
          <header className="App-header">
            <h1>Sancus</h1>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Upload">Upload</Link>
             </li>
          </header>

          {/*App Content Area*/}
          <div className="App-body">
            <Route path="/" exact component={Home} />
            <Route path="/Upload" component={Upload} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
