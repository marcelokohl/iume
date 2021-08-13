import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Front from './front';
import { Actions } from '../../../store/modules/company/actions';

const CreateCompany = () => {
  const dispatch = useDispatch()

  const apiFeedback = useSelector(state => state.company.apiFeedback)

  const submit = (name) => {
    dispatch(Actions.createCompanyRequest(name))
  }

  return (
    <Front
      submit={submit}
      apiFeedback={apiFeedback}
    />
  );
}

export default CreateCompany;
