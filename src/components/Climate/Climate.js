import React from 'react';
import './Climate.css';

const climate = props => {

	return(
    <div className="col-3 Climate-form">
      <div className="row">
        <div className="col-8 Climate-form_temp">
          {props.thermostat}
        </div>
        <div className="col-4 Climate-form_buttons">
          <div className="row">
            <button onClick={props.increment}>+</button>
          </div>
          <div className="row">
            <button onClick={props.decrement}>-</button>
          </div>
        </div>
      </div>
    </div>
	);
};

export default climate;