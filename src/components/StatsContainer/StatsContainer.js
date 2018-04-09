import React from 'react';

const stats_container = props => (
  <div className="col-3 stats-container">
    <h4 className="stats-container_name">{props.stat_name}</h4>
  </div>
);

export default stats_container;