import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Actions as SuggestionActions } from '../../store/modules/view/suggestion/actions';

import Front from './front';

const PageFooter = props => {
  const dispatch = useDispatch()

  const apiFeedback = useSelector(state => state.viewSuggestion.apiFeedback)
  const email = useSelector(state => state.profile.email)

  const sendSuggestion = (feedback) => {
    dispatch(SuggestionActions.sendSuggestionRequest(feedback, 'home'))
  }

  return (
    <Front
      sendSuggestion={sendSuggestion}
			apiFeedback={apiFeedback}
      userEmail={email}
      gtag={props.gtag}
      type={props.type}
		/>
  );
}

export { PageFooter };
