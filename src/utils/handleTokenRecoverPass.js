import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { Actions as AuthActions } from '../store/modules/auth/actions';

const TokenRecover = () => {
  const dispatch = useDispatch()

  const { token } = useParams()

  useEffect(() => {
    dispatch(AuthActions.saveTokenToRecoverPassword(token))
  }, [])

  return <Redirect to="/admin/new-password" />
}

export default TokenRecover;
