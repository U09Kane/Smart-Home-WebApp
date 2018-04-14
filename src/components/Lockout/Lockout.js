import React from 'react';

import lockIcon from '../../assets/locked.svg';
import unlockedIcon from '../../assets/unlocked.svg';
import './Lockout.css';

const lockout = props => {

  let icon = unlockedIcon;

  if (props.locked) {icon = lockIcon}

  return(
    <div className='col-2 Lockout-container'>
      <img className='Lockout_icon' src={icon} alt="" onClick={props.clicked}/>
    </div>
  );
};

export default lockout;