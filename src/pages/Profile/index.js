import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as AuthActions } from '../../store/modules/auth/actions';
import { Actions as CompanyProfileActions } from '../../store/modules/companyProfile/actions';

import Front from './front';

const Profile = () => {
  const dispatch = useDispatch()

  const { companies, email } = useSelector(state => state.profile)

  const companyActive = companies[0] ? companies[0].attributes.active : false

  const apiLogoutFeedback = useSelector(state => state.logout.apiLogoutFeedback)

  useEffect(() => {
    dispatch(CompanyProfileActions.loadCompanyProfileRequest(companies[0].id))
  }, [])

  const logout = () => {
    dispatch(AuthActions.logoutRequest())
  }
  
  return (
    <Front
      actived={companyActive}
      data={{ email }}
      logoutFeedback={apiLogoutFeedback}
      logout={logout}
    />
  );
}

export default Profile;
