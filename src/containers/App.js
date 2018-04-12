import React from 'react';
import axios from 'axios';

import Panels from '../components/Panels/Panels';
import Sensors from '../components/Sensors/Sensors';
import Weather from '../components/Weather/Weather';
import climateIcon from '../assets/thermometer.svg';
import menuIcon from '../assets/menu.svg';
import './App.css';


class App extends React.Component {

  state = {
    showSensors: false,

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
        last_week: null,
        this_week: null,
        next_week: null
      },
      climate: {
        thermostat: null,
        out_temp: null,
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
    const dev = 'https://gist.githubusercontent.com/U09Kane/f71c3e76dd8e53aa8ef9b1dee44647c2/raw/345b99aea7a78d3f836358c0ecb13e43a0fda162/updatedRequest';
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




    // // copy sensor from list (avoids mutating state directly)
    // const sensor = { ...this.state.status.sensors[sensIndex]}; 
    // sensor.is_on = !sensor.is_on; // flip the boolean
    // const sensors = { ...this.state.status.sensors };
    // sensors[sensIndex] = sensor; // change sensor in that index

    // this.setState({
    //   status: {
    //     sensors: sensors // update state with new sensor array
    //   }
    // });
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
                temp={this.state.status.climate.out_temp}
                humidity={this.state.status.climate.humidity}
                description={this.state.status.climate.description} />

              {/* <Climate /> */}
            </div>
            <div className="row">
              { 
                this.state.showSensors ?
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
