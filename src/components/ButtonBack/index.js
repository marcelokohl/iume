import React from 'react';
import {Button, Icon} from '../'
import history from '../../services/history'

const ButtonBack = ({className, data, onClick, ...props}) => {
  let c = (
    'ButtonBack'+
    ' circled mr-auto mb-0'+
    (className?' '+className:'')
  )

  return (
		<Button onClick={onClick?onClick:history.goBack} className={c}><Icon name="arrow-left" /></Button>
  );
};

export { ButtonBack };
