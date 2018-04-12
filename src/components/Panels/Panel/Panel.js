import React from 'react';

import './Panel.css';

const panel = (props) => {

	return(
		<div className="row Panel">
      <div className="col-2 Panel-container_icon">
        <img src={props.icon} alt=""/>
      </div>
      <div className="col-10 Panel-container">
        <div className="row">
          <div className="col-sm-3 Panel-container_stats">
            <h5>Last Week</h5>
            { props.info.last_week }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5>This Week</h5>
            { props.info.this_week }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5>Next Week</h5>
            { props.info.next_week }
          </div>
        </div>
      </div>
		</div>
	)
};

export default panel;