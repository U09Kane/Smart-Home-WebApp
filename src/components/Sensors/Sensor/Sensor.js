import React from 'react';
import './Sensor.css';

const sensor = props => {

  return(
  <div className='row Sensor-pill'>
    <span className='col-4 Sensor-pill_name'>{props.name}</span>
    <span className='col-4 Sensor-pill_type'>{props.type}</span>
    <span className='col-4 Sensor-pill_ison'>
      <input type="checkbox" defaultChecked="true" onChange={console.log('hi')}/>
    </span>
  </div>
  );
}

export default sensor;