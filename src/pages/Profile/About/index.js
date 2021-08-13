import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as Personal } from '../../../store/modules/companyProfile/personal/actions';
import { Actions as OwnerActions } from '../../../store/modules/owner/actions';
import { Actions as CompanyProfileActions } from '../../../store/modules/companyProfile/actions';

import Front from './front';

const Profile = props => {
  const dispatch = useDispatch()

  const { companies, email } = useSelector(state => state.profile)

  const { name } = useSelector(state => state.companyProfilePersonalData)

  const { apiFeedback } = useSelector(state => state.companyProfilePersonalData)

  const { destroyAccountFeedback } = useSelector(state => state.owner)

  useEffect(() => {
    return () => { dispatch(Personal.resetPersonalDataFeedback()) }
  }, [])

  const setInputValue = (key, value) => {
    dispatch(Personal.setInputValue(key, value))
  }

  const updateProfile = () => {
    dispatch(Personal.updatePersonalDataRequest(companies[0].id, name))
  }

  const destroyAccount = () => {
    dispatch(OwnerActions.destroyOwnerAccountRequest())
  }

  return (
    <Front
      data={{ name, email }}
      apiFeedback={apiFeedback}
      removeAccountFeedback={destroyAccountFeedback}
      onFieldChange={setInputValue}
      removeAccount={destroyAccount}
      updateProfile={updateProfile}
      pageRef={props.pageRef}
    />
  );
}
export default Profile;
