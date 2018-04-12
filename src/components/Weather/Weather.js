import React from 'react';
import './Weather.css';

const weather = props => (
		<div className="col-6 Weather-form">
			<div>
				Temperature: <span>{props.temp}</span>	
			</div>
			<div>
				Humidity: <span>{props.humidity}</span>
			</div>
				Description: <span>{props.description}</span>
		</div>
	);

export default weather;