import React from 'react';
import Panel from './Panel/Panel'

import powerIcon from '../../assets/light-bulb.svg';
import waterIcon from '../../assets/drop.svg';
import hvacIcon from '../../assets/fan.svg';



const panels = (props) => {

	return(
		<div>
      <Panel
        icon={powerIcon}
        info={props.data.power} />
      <Panel
        icon={waterIcon}
        info={props.data.water} />
      <Panel
        icon={hvacIcon}
        info={props.data.hvac} />
		</div>
	)

};

export default panels;