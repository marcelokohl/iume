import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as AuthActions } from '../../../store/modules/auth/actions';
import { Actions as CompanyProfileActions } from '../../../store/modules/companyProfile/actions';
import { Actions as CompanyActions } from '../../../store/modules/company/actions';
import { Actions as OwnerActions } from '../../../store/modules/owner/actions';

import Front from './front';

const Profile = () => {
  let [timer, setTimer] = useState(null)

  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])

  const companyActive = company ? company.attributes.active : false

  const email = useSelector(state => state.profile.email)

  const { name, slug } = useSelector(state => state.companyProfile)
  const apiFeedback = useSelector(state => state.companyProfile.apiFeedback)
  const apiPasswordFeedback = useSelector(state => state.companyProfile.apiPasswordFeedback)
  const apiLogoutFeedback = useSelector(state => state.logout.apiLogoutFeedback)

  const destroyAccountFeedback = useSelector(state => state.owner.destroyAccountFeedback)

  useEffect(() => {
    dispatch(CompanyProfileActions.loadCompanyProfileRequest(company.id))

    return () => {
      dispatch(CompanyProfileActions.resetCompanyProfileFeedbacks())
    }
  }, [])

  const setInputValue = (key, value) => {
    key === 'slug' && slugDebounce(value)

    dispatch(CompanyProfileActions.setInputValue(key, value))
  }

  const updateProfile = () => {
    dispatch(CompanyProfileActions.updateCompanyProfileRequest(company.id, name, slug))
  }

  const updatePassword = (data) => {
    const { currentPassword, newPassword } = data

    dispatch(OwnerActions.updateOwnerPasswordRequest(currentPassword, newPassword))
  }

  const sendLink = () => {
    dispatch(OwnerActions.sendEmailToRecoverPasswordRequest(email))
  }

  const logout = () => {
    dispatch(AuthActions.logoutRequest())
  }

  const destroyAccount = () => {
    dispatch(OwnerActions.destroyOwnerAccountRequest())
  }

  const slugDebounce = (newSlug) => {
    clearTimeout(timer)

    if(newSlug === company.attributes.slug || !newSlug.length) {
      dispatch(CompanyProfileActions.resetSlugCheckStatus())
      return
    }

    const debounce = setTimeout(() => {
      dispatch(CompanyProfileActions.checkSlugAvailabilityRequest(newSlug))
    }, 700)

    setTimer(debounce)
  }

  const updateMenuActive = active => {
    dispatch(CompanyActions.updateMenuActiveRequest(company.id, active))
  }

  return (
    <Front
      actived={companyActive}
      setActived={updateMenuActive}

      logout={logout}
      data={{ name, email, slug, link: slug}}
      onFieldChange={setInputValue}
      updateProfile={updateProfile}
      updatePassword={updatePassword}
      sendRecover={sendLink}
      apiFeedback={apiFeedback}
      logoutFeedback={apiLogoutFeedback}
      removeAccountFeedback={destroyAccountFeedback}
      removeAccount={destroyAccount}
      apiPasswordFeedback={apiPasswordFeedback}
    />
  );
}

export default Profile;
