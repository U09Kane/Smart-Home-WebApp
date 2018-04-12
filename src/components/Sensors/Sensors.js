import React from 'react';
import Sensor from './Sensor/Sensor';

const sensors = props => { 
  return (
    props.sensList.map((sensor, index) => <Sensor
      key={sensor.id}
      index={sensor.id}
      name={sensor.name}
      type={sensor.type}
      is_on={sensor.is_on}
      flipped={(event) => props.flipped(event, sensor.id)} />
 ))};

export default sensors;