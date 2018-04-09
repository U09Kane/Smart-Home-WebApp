import React from 'react';
import Sensor from './Sensor/Sensor';

const sensors = props => { 
  return (
    props.senslist.map(sensor => <Sensor
      key={sensor.id}
      name={sensor.name}
      type={sensor.type}
      is_on={sensor.is_on} />
 ))};

export default sensors;