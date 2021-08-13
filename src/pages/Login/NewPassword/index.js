import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import Front from './front';
import { Actions } from '../../../store/modules/owner/actions';

const Recover = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.tokenRecoverPass)
  
  const { apiFeedbackRecoverPassword } = useSelector(state => state.owner)

  const updatePassword = (password, passwordConfirmation) => {
    dispatch(Actions.recoverPasswordRequest(token, password, passwordConfirmation))
  }

  return (
    <Front 
      updatePassword={updatePassword}
      apiFeedback={apiFeedbackRecoverPassword}
    />
  );
}

export default Recover;
