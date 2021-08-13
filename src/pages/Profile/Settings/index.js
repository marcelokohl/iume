import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as Settings } from '../../../store/modules/companyProfile/settings/actions';
import { Actions as CompanyActions } from '../../../store/modules/company/actions';

import Front from './front';

const Profile = props => {
  let [timer, setTimer] = useState(null)

  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])

  const companyActive = company ? company.attributes.active : false
  
  const { slug, apiFeedback } = useSelector(state => state.companyProfileSettings)

  const setInputValue = (key, value) => {
    key === 'slug' && slugDebounce(value)

    dispatch(Settings.setInputValue(key, value))
  }

  const updateSlug = () => {
    dispatch(Settings.updateSlugRequest(company.id, slug))
  }

  const slugDebounce = (newSlug) => {
    clearTimeout(timer)

    if(newSlug === company.attributes.slug || !newSlug.length) {
      dispatch(Settings.resetSlugCheckStatus())
      return
    }

    const debounce = setTimeout(() => {
      dispatch(Settings.checkSlugAvailabilityRequest(newSlug))
    }, 700)

    setTimer(debounce)
  }

  const updateMenuActive = active => {
    dispatch(CompanyActions.updateMenuActiveRequest(company.id, active))
  }

  return (
    <Front
      data={{ slug }}
      actived={companyActive}
      setActived={updateMenuActive}
      apiFeedback={apiFeedback}
      submit={updateSlug}
      onFieldChange={setInputValue}

      pageRef={props.pageRef}
    />
  );
}

export default Profile;
