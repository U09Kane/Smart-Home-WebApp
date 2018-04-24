import React from 'react';
import './Sensor.css';

const sensor = props => {

  return(
  <div className='row Sensor-pill'>
    <span className='col-4 Sensor-pill_name'>{props.name}</span>
    <span className='col-4 Sensor-pill_type'>{props.type}</span>
    <span className='col-4 Sensor-pill_ison'>
      <div className='Sensor-form'>
        <input className='Sensor-pill_button'type="checkbox"
          checked={props.is_on} 
          onChange={props.flipped}/>
        <label htmlFor="Something"></label>
        <i></i>
      </div>
    </span>
  </div>
  );
}

export default sensor;