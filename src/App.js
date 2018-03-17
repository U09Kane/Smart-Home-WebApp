import React from 'react';
import PanelButton from './components/PanelButton';
import PanelBody from './components/PanelBody';
import power_icon from './img/light-bulb.svg';
import water_icon from './img/drop.svg';
import hvac_icon from './img/fan.svg';
import climate_icon from './img/thermometer.svg';


class App extends React.Component {
  state = {
    powerButtonClicked: false,
    waterButtonClicked: false,
    hvacButtonClicked: false,
    climateButtonClicked: false
  };

  clickHandler = () => {
    console.log("Registered a Click");
    this.setState({
      powerButtonClicked: true
    })
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
                  click={this.clickHandler} />
                <PanelButton 
                  name="Water" 
                  icon={ water_icon } />
                <PanelButton 
                  name="HVAC" 
                  icon={ hvac_icon } />
                <PanelButton
                  name="Climate" 
                  icon={ climate_icon } />
              </div>
              <div className="row">
                <div className="container body">
                  <PanelBody name="Power" />
                  <PanelBody name="Water" />
                  <PanelBody name="HVAC"/>
                  <PanelBody name="Climate" />
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
};

export default App;
