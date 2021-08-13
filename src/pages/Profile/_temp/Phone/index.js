import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as CompanyProfileActions } from '../../../store/modules/companyProfile/actions';

import Front from './front';

const Profile = (props) => {

  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])

  const apiFeedback = useSelector(state => state.companyProfile.apiFeedback)

  const [data, setData] = useState([{number:'99-77665-4433'}, {}])

  useEffect(() => {
    dispatch(CompanyProfileActions.loadCompanyProfileRequest(company.id))

    return () => {
      dispatch(CompanyProfileActions.resetCompanyProfileFeedbacks())
    }
  }, [])

  const setInputValue = (key, value) => {
    dispatch(CompanyProfileActions.setInputValue(key, value))
  }

  return (
    <Front
      apiFeedback={apiFeedback}
      data={data}
      updateForm={setData}
      onFieldChange={setInputValue}

      pageRef={props.pageRef}

    />
  );
}
export default Profile;
