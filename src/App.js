import React, { Component } from 'react';
import './App.css';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      city: 'Los Angeles',
      date: 'Wed 15/08/2018',
      temperatureSet:
      [
        {
          time: 'now',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Sun-512.png',
          temperature: '15*C'
        },
        {
          time: '6p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Sun-512.png',
          temperature: '16*'
        },
        {
          time: '7p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Snowfall-512.png',
          temperature: '13*'
        },
        {
          time: '8p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Snowfall-512.png',
          temperature: '12*'
        },
        {
          time: '9p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Sun-512.png',
          temperature: '10*'
        },
        {
          time: '10p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Snowfall-512.png',
          temperature: '8*'
        },
        {
          time: '11p.m',
          icon: 'https://cdn3.iconfinder.com/data/icons/weather-icons-1/64/Snowfall-512.png',
          temperature: '7*'
        }
      ]
    };
  }

  render() {
    return (
      <div className="Temperature">
        <div className="Temperature-box">
          <p className="Temperature-temp">
            {this.state.temperatureSet[0].temperature}
          </p>
          
          <p className="Temperature-city">
            {this.state.city}
          </p>

          <p className="Temperature-date">
            {this.state.date}
          </p>

          <div className="Temperature-hours">
            <div className="column">
              <div className="row">
                {this.state.temperatureSet[1].time}
              </div>
              <div className="row">
                <img src={this.state.temperatureSet[1].icon} className="icons" alt="icons"/>
              </div>
              <div className="row">
                {this.state.temperatureSet[1].temperature}
              </div>
            </div>

            <div className="column">
              <div className="row">
                {this.state.temperatureSet[2].time}
              </div>
              <div className="row">
                <img src={this.state.temperatureSet[2].icon} className="icons" alt="icons"/>
              </div>
              <div className="row">
                {this.state.temperatureSet[2].temperature}
              </div>
            </div>

            <div className="column">
              <div className="row">
                {this.state.temperatureSet[3].time}
              </div>
              <div className="row">
                <img src={this.state.temperatureSet[3].icon} className="icons" alt="icons"/>
              </div>
              <div className="row">
                {this.state.temperatureSet[3].temperature}
              </div>
            </div>

            <div className="column">
              <div className="row">
                {this.state.temperatureSet[4].time}
              </div>
              <div className="row">
                <img src={this.state.temperatureSet[4].icon} className="icons" alt="icons"/>
              </div>
              <div className="row">
                {this.state.temperatureSet[4].temperature}
              </div>
            </div>

            <div className="column">
              <div className="row">
                {this.state.temperatureSet[5].time}
              </div>
              <div className="row">
                <img src={this.state.temperatureSet[5].icon} className="icons" alt="icons"/>
              </div>
              <div className="row">
                {this.state.temperatureSet[5].temperature}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Temperature;
