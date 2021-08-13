import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../../store/modules/owner/actions';

import Front from './front';

const CreateOwner = () => {
  const dispatch = useDispatch();

  const email = useSelector(state => state.profile.email);

  const apiFeedback = useSelector(state => state.owner.apiFeedback)

  const createOwner = (pass, passConf) => {
    dispatch(Actions.createOwnerRequest(email, pass, passConf))
  }

  return (
    <Front
      createOwner={createOwner}
      apiFeedback={apiFeedback}
    />
  );
}

export default CreateOwner;
