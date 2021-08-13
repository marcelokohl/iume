import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg'

const Logo = props => {
	const {className} = props
	return (
		<img className={"Logo"+(className?' '+className:'')} src={logo} />
	)
};

export { Logo }
