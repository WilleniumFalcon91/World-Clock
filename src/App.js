import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CityName from './CityName.js';
import Time from './Time.js';



class App extends Component {


constructor(props) {
    super(props);
    this.state = {
        currentTime: new Date(),
        text: "Hello there!"
    }
      this.timerId = setInterval(
          () => this._update(), 1000
        );
}

_update = () => {
    this.setState({
        currentTime: new Date(),
    });
      // console.log(this.state.currentTime)
}
_updateText = (event) => {
    this.setState({
        text: event.target.value
    });
      // console.log(this.state.currentTime)
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://bestanimations.com/Earth&Space/Earth/earth-spinning-rotating-animation-24.gif" className="App-logo" alt="logo" />
          <h2>World Clock</h2>
          <input type="text" value={this.state.text} onChange={this._updateText} />
          <div>{this.state.text}</div>

        </div>
        <div className="weatherDisplay">
          <h1>Weather</h1>
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
            <div className="City1">
              <div className="Name">
              <CityName name={'Los Angeles'}/>
              </div>
              <div className="Time">
              <Time newTime={this.state.currentTime.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})}/>
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
