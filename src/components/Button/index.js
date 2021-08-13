import React, { useState } from 'react';
import { Button as ThemeButton } from 'blackflag';

const Button = ({onClick, gtag, ...props}) => {
	const onButtonClick = (e) => {
		if (window.gtag && gtag && localStorage.getItem('cookies_enabled') === 'true') {
			window.gtag('event', gtag)
		}
		if (onClick) {
			onClick(e);
		}
	}
	return (
		<ThemeButton {...props} onClick={onButtonClick} />
	)
};

export { Button }
