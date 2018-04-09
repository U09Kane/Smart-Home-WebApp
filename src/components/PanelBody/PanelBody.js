import React from 'react';
import StatsContainer from '../StatsContainer/StatsContainer';

const panel_body = props => (
	<div className="panel-body">
		<p>Welcome to the {props.name} body</p>
      <div className="row">
        <StatsContainer
          stat_name={props.otherName} />
        <StatsContainer
          stat_name={props.otherName} />
        <StatsContainer
          stat_name={props.otherName} />
      </div>
	</div>

);

export default panel_body;