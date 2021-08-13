import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as AuthActions } from '../../../store/modules/auth/actions';
import { Actions as OwnerActions } from '../../../store/modules/owner/actions';

import Front from './front';

const Signin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthActions.resetApiFeedBack())
  }, [])

  const email = useSelector(state => state.profile.email)

  const apiFeedback = useSelector(state => state.auth.apiFeedback)

  const submit = (password) => {
    dispatch(AuthActions.loginRequest(email, password))
  }

  const sendLink = () => {
    dispatch(OwnerActions.sendEmailToRecoverPasswordRequest(email))
  }

  return (
    <Front
      email={email}
      submit={submit}
      sendLink={sendLink}
      apiFeedback={apiFeedback}
    />
  );
}

export default Signin;
