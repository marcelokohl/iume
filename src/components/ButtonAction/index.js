import React, { useState } from 'react';
import { Button, Icon } from 'blackflag';

const ButtonAction = ({children, icon, className, ...props}) => {
	return (
		<span className={'ButtonAction' + (className?' '+className:'')  + (props.disabled?' disabled':'')}>
			<Button {...props} className="circled primary" >
				<Icon name={icon}/>
			</Button>
			{children}
		</span>
	)
};

export { ButtonAction }
