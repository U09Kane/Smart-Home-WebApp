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
          <div className="Climate_button"onClick={props.increment}>+</div>
          <div className="Climate_button"onClick={props.decrement}>-</div>
        </div>
      </div>
    </div>
	);
};

export default climate;