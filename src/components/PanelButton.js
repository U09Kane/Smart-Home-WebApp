import React from 'react';

const panel_button = props => (
  <button className="col panel-button" onClick={props.click}>
    <div>
      <img className="button-icon" src={props.icon} alt="icon.jpg"/>
      <h4 className="button-label">{props.name}</h4>
    </div>
  </button>
);

export default panel_button;