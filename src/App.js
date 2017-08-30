import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CityName from './CityName.js';
import Time from './Time.js';

class App extends Component {


constructor(props) {
    super(props);
    this.state = {
        currentTime: new Date()
    }
      this.timerId = setInterval(
          () => this._update(), 1000
        );
}

_update = () => {
    this.setState({
        currentTime: new Date()
    });
      // console.log(this.state.currentTime)
}

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
              <CityName name={'New York'}/>
              </div>
              <div className="Time">
              <Time newTime={this.state.currentTime.toLocaleString("en-US", {timeZone: "America/New_York"})}/>
              </div>
            </div>
            <div className="City2">
              <div className="Name">
              <CityName name={'London'}/>
              </div>
              <div className="Time">
              <Time newTime={this.state.currentTime.toLocaleString("en-US", {timeZone: "Europe/London"})}/>
              </div>
            </div>
            <div className="City3">
              <div className="Name">
              <CityName name={'Tokyo'}/>
              </div>
              <div className="Time">
              <Time newTime={this.state.currentTime.toLocaleString("en-US", {timeZone: "Asia/Tokyo"})}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
