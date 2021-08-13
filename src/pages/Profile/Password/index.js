import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as CompanyProfileActions } from '../../../store/modules/companyProfile/actions';
import { Actions as PasswordActions } from '../../../store/modules/companyProfile/password/actions';

import Front from './front';

const Profile = (props) => {
  const [currentPass, setCurrentPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])
  const { apiFeedback } = useSelector(state => state.companyProfilePassword)

  useEffect(() => {
    dispatch(CompanyProfileActions.loadCompanyProfileRequest(company.id))
  }, [])

  const updatePassword = () => {
    dispatch(PasswordActions.updatePasswordRequest(currentPass, newPass))
  }

  const setPassword = (key, value) => {
    key === 'currentPassword' && setCurrentPass(value)
    key === 'newPassword' && setNewPass(value)
  }

  return (
    <Front
      apiFeedback={apiFeedback}
      onFieldChange={setPassword}
      updateForm={updatePassword}
      pageRef={props.pageRef}
    />
  );
}
export default Profile;
