import React from 'react';
import PanelButton from './components/PanelButton';
import PanelBody from './components/PanelBody';
import power_icon from './img/light-bulb.svg';
import water_icon from './img/drop.svg';
import hvac_icon from './img/fan.svg';
import climate_icon from './img/thermometer.svg';

const apiJSON = {
  power: {
    info: {
      light1: false,
      light2: true,
      light3: false
    },
    usage: {
      week: 150,
      nextWeek: 155,
      avgweek: 152
    }

  },
  water: {

  },
  hvac: {

  },
  climate: {

  }

}

class App extends React.Component {


  state = {
    powerButtonClicked: false,
    waterButtonClicked: false,
    hvacButtonClicked: false,
    climateButtonClicked: false,

    // API Json:

    weeklPowerUsage: undefined,
    projectedPowerUsage: undefined,

    weeklWaterUsage: undefined,
    projectedWaterUsage: undefined,

    weeklHVAC: undefined,
    projectedHVAC: undefined,
  };

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
      <div className="wrapper">
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
                  name="power"/> }
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
          </div>
        </div>
      </div>
    );
  }
};

export default App;
