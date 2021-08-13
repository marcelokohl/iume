import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Actions as EmailActions } from '../../store/modules/emails/actions';

import Front from './front';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(EmailActions.resetApiFeedback())
  }, []);

  function checkEmail(email) {
    dispatch(EmailActions.checkEmailRequest(email))
  }

  const apiFeedback = useSelector(state => state.emails.apiFeedback)

  return (
    <Front
      submit={checkEmail}
      apiFeedback={apiFeedback}
    />
  )
}

export default Login;
