import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as OwnerActions } from '../../../store/modules/owner/actions';

import Front from './front';

const Recover = () => {
  const dispatch = useDispatch()

  const { email } = useSelector(state => state.profile)
  const { apiFeedbackSendEmailRecover } = useSelector(state => state.owner)

  const sendRecover = () => {
    dispatch(OwnerActions.sendEmailToRecoverPasswordRequest(email))
  }

  return (
    <Front
      email={email}
      apiFeedback={apiFeedbackSendEmailRecover}
      sendRecover={sendRecover}
    />
  );
}

export default Recover;
