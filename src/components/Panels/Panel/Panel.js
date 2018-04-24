import React from 'react';

import './Panel.css';

const panel = (props) => {

  const numWithCommas = (x) => {
    // Stack Overflow: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

	return(
		<div className="row Panel">
      <div className="col-2 Panel-icon">
        <img className={"Panel-icon_icon " + props.name} src={props.icon} alt=""/>
      </div>
      <div className="col-10 Panel-container">
        <div className="row">
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>Last Week</h5>
            { numWithCommas(Math.round(props.info.last_week)) + ' ' + props.unit }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>This Week</h5>
            { numWithCommas(Math.round(props.info.this_week)) + ' ' + props.unit }
          </div>
          <div className="col-sm-3 Panel-container_stats">
            <h5 className='Panel_title'>Next Week</h5>
            { numWithCommas(Math.round(props.info.next_week)) + ' ' + props.unit }
          </div>
        </div>
      </div>
		</div>
	)
};

export default panel;