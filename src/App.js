import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CityName from './CityName.js';
import Time from './Time.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>World Clock</h2>
        </div>
        <div className="Data-block">
          <div className="Time-zones">
            <div className="City1">
              <div className="Name">
              <CityName />
              </div>
              <div className="Time">
              <Time />
              </div>
            </div>
            <div className="City2">
              <div className="Name">
              <CityName />
              </div>
              <div className="Time">
              <Time />
              </div>
            </div>
            <div className="City3">
              <div className="Name">
              <CityName />
              </div>
              <div className="Time">
              <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
