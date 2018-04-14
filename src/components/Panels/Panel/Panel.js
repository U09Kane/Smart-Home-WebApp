import React from 'react';

import './Panel.css';

const panel = (props) => {

	return(
		<div className="row Panel">
      <div className="col-2 Panel-icon">
        <img className={"Panel-icon_icon " + props.name} src={props.icon} alt=""/>
      </div>
      <div className="col-10 Panel-container">
        <div className="row">
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>Last Week</h5>
            { Math.round(props.info.last_week) + ' ' + props.unit }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>This Week</h5>
            { Math.round(props.info.this_week) + ' ' + props.unit }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>Next Week</h5>
            { Math.round(props.info.next_week) + ' ' + props.unit }
          </div>
        </div>
      </div>
		</div>
	)
};

export default panel;