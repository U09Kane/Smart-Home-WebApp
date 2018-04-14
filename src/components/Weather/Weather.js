import React from 'react';
import './Weather.css';

const weather = props => (
		<div className="col-5 Weather-form">
			<div className="Weather-form_data">
				Temperature: <span>{props.temp}</span>	
			</div>
			<div className="Weather-form_data">
				Humidity: <span>{props.humidity}</span>
			</div>
			<div className="Weather-form_data">
				Description: <span>{props.description}</span>
			</div>
		</div>
	);

export default weather;