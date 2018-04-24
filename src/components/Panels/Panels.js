import React from 'react';
import Panel from './Panel/Panel'

import powerIcon from '../../assets/light-bulb.svg';
import waterIcon from '../../assets/tap.svg';

const panels = (props) => {

	return(
		<div>
      <Panel
        name='power'
        icon={powerIcon}
        info={props.data.power}
        unit='kW' />
      <Panel
        name='water'
        icon={waterIcon}
        info={props.data.water}
        unit='gal' />
		</div>
	)

};

export default panels;