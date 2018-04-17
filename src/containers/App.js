import React from 'react';
import axios from 'axios';

import Panels from '../components/Panels/Panels';
import Sensors from '../components/Sensors/Sensors';
import Weather from '../components/Weather/Weather';
import Climate from '../components/Climate/Climate';
import Lockout from '../components/Lockout/Lockout';
import menuIcon from '../assets/menu.svg';
import './App.css';


class App extends React.Component {

  state = {
    showSensors: false,
    lockedDown: false,

    status: {
      power: {
        last_week: null,
        this_week: null,
        next_week: null
      },
      water: {
        last_week: null,
        this_week: null,
        next_week: null
      },
      hvac: {
        thermostat: null
      },
      climate: {
        intemp: null,
        extemp: null,
        description: null,
        humidity: null
      },
      sensors: [
        {
          name: null,
          is_on: false,
          id: null,
          type: null,
        }
      ]
    }
  };

  componentDidMount () {

    const actual = 'http://localhost:3000/profile';
    const dev = 'https://gist.githubusercontent.com/U09Kane/f71c3e76dd8e53aa8ef9b1dee44647c2/raw/658a47ac4797f732dc0cbca5e56520997366ccb0/updatedRequest';
    axios.get(dev)
    .then(response => {
      this.setState({
        status: {
          power: response.data.power,
          water: response.data.water,
          hvac: response.data.hvac,
          climate: response.data.climate,
          sensors: response.data.sensors  // array of sensor objects with {id, name, type, is_on}
        }
      });
    });
  }

  menuClickHandler = () => {
    this.setState({showSensors: !this.state.showSensors});
  };

  sensorFlipHandler = ( event, id ) => {
    
    const sensIndex = this.state.status.sensors.findIndex(sens => {
      return sens.id === id; // returns index of sensor within array
    });

    const payload = this.state.status;
    payload.sensors[sensIndex].is_on = !payload.sensors[sensIndex].is_on;
      
    axios.post('http://localhost:3000/profile', payload)
      .then(response => console.log(response))
      .then(this.forceUpdate());
  };

  tempUpHandler = () => {
    const payload = this.state.status;
    

    if (payload.hvac.thermostat < 85)
    payload.hvac.thermostat++;
    axios.post('http://localhost:3000/profile', payload)
      .then(response => console.log(response))
      .then(this.forceUpdate());
  };

  tempDownHandler = () => {
    const payload = this.state.status;
    

    if (payload.hvac.thermostat > 55) {
      payload.hvac.thermostat--;
      axios.post('http://localhost:3000/profile', payload)
        .then(response => console.log(response))
        .then(this.forceUpdate());
    }
  };

  lockClickHandler = () => {
    this.setState({lockedDown: !this.state.lockedDown});

    // Set all windows and doors to off
    if (!this.state.lockedDown) {
      let payload = this.state.status;
      for (let i in payload.sensors) {
        if (i.type === 'h') {
          i.is_on === false;
        }
      }
      axios.post('http://localhost:3000/profile', payload)
        .then(response => console.log(response))
        .then(this.forceUpdate());
    }
  };


  render() {
    return (
      <div className='wrapper' onLoad={this.getUpdate}>
        <div className='main'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 title-container'>
                <h1 className='title'>Home</h1>
              </div>
            </div>
            <div>
              <Panels
                data={this.state.status} />
            </div>
            <div className="row">
              <Weather
                temp={this.state.status.climate.extemp}
                humidity={this.state.status.climate.humidity}
                description={this.state.status.climate.description} />

              <Climate
                thermostat={this.state.status.hvac.thermostat}
                increment={this.tempUpHandler}
                decrement={this.tempDownHandler} />
              <Lockout
                locked={this.state.lockedDown}
                clicked={this.lockClickHandler} />
            </div>
            <div className="row">
              { 
                this.state.showSensors && !this.state.lockedDown ?
                <Sensors 
                  sensList={this.state.status.sensors}
                  flipped={this.sensorFlipHandler}/>
                : null
              }
            </div>
            <div className=" row menu-bar" onClick={this.menuClickHandler}>
              <img className="menu-bar_icon"src={menuIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
