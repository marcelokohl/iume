import React from 'react';
import {Link as RouterLink} from 'react-router-dom'

const Link = ({onClick, gtag, ...props}) => {
	const onLinkClick = (e) => {
    if (window.gtag && gtag && localStorage.getItem('cookies_enabled') === 'true') {
      window.gtag('event', gtag)
    }
    if (onClick) {
      onClick(e);
    }
  }
  return (
    <RouterLink onClick={onLinkClick} {...props} />
  )
}

export { Link };
