import React from 'react';
import axios from 'axios';

import PanelButton from '../components/PanelButton/PanelButton';
import PanelBody from '../components/PanelBody/PanelBody';
import Sensors from '../components/Sensors/Sensors';
import power_icon from '../assets/light-bulb.svg';
import water_icon from '../assets/drop.svg';
import hvac_icon from '../assets/fan.svg';
import climate_icon from '../assets/thermometer.svg';
import './App.css';


class App extends React.Component {

  state = {
    powerButtonClicked: false,
    waterButtonClicked: false,
    hvacButtonClicked: false,
    climateButtonClicked: false,
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

  // postReq = () => {
  //   const payload = {
  //     title: "Moby Dick",
  //     author: "Herman Melville",
  //     rating: "it's alright"
  //   }
  //   axios.post("http://localhost:3000/profile", payload)
  //     .then(response => console.log(response));
  // }

  componentDidMount () {
    axios.get('https://gist.githubusercontent.com/U09Kane/2e739089f77412dab4958741265925d2/raw/767131ff97b67cd67c93e193fb2bf501f4f113e5/request.json')
    .then(response => {
      this.setState({
        status: {
          sensors: response.data.sensors  // array of sensor objects with {id, type, is_on}
        }
      });
    });
  }

  clickSensorHandler = () => {
    this.setState({
      showSensors : true
    });
  }

  panelClickHandler = (panelName) => {
    
    switch (panelName) {
      case 'power':
        this.setState({
          climateButtonClicked: false,
          hvacButtonClicked: false,
          waterButtonClicked: false,
          powerButtonClicked: true
        });
        break;
      case 'water':
        this.setState({
          climateButtonClicked: false,
          hvacButtonClicked: false,
          powerButtonClicked: false,
          waterButtonClicked: true
        });
        break;
      case 'hvac':
        this.setState({
          climateButtonClicked: false,
          powerButtonClicked: false,
          waterButtonClicked: false,
          hvacButtonClicked: true
        });
        break;
      case 'climate':
        this.setState({
          powerButtonClicked: false,
          waterButtonClicked: false,
          hvacButtonClicked: false,
          climateButtonClicked: true
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="wrapper" onLoad={this.getUpdate}>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 title-container">
                <h1 className="title">Home</h1>
              </div>
            </div>
            <div className="row">
              <PanelButton 
                name="Power" 
                icon={ power_icon }
                click={this.panelClickHandler.bind(this, 'power')} />
              <PanelButton 
                name="Water" 
                icon={ water_icon } 
                click={this.panelClickHandler.bind(this, 'water')} />
              <PanelButton 
                name="HVAC" 
                icon={ hvac_icon }
                click={this.panelClickHandler.bind(this, 'hvac')} />
              <PanelButton
                name="Climate" 
                icon={ climate_icon }
                click={this.panelClickHandler.bind(this, 'climate')} />
            </div>
            <div className="row">
              <div className="container body">
                {this.state.powerButtonClicked && 
                <PanelBody 
                  name="power"
                  /> }
                {this.state.waterButtonClicked && 
                <PanelBody 
                  name="water"/> }
                {this.state.hvacButtonClicked && 
                <PanelBody 
                  name="hvac"/> }
                {this.state.climateButtonClicked && 
                <PanelBody 
                  name="climate"/> }
              </div>
            </div>
            <div className='container'>
            <button onClick={this.climateOnClickHandler}>Get Weather</button>
            { this.state.showSensors ?
              <Sensors
                senslist={this.state.status.sensors}/>
              : <button onClick={this.clickSensorHandler}>Click Here!</button>
            }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
