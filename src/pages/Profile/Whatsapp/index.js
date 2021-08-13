import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as WhatsappActions } from '../../../store/modules/companyProfile/whatsapp/actions';

import Front from './front';

const Profile = (props) => {

  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])

  const { hasPhone, phone, whatsappStatus, apiFeedback } = useSelector(state => state.companyProfileWhatsapp)
  const { hasAddress } = useSelector(state => state.companyProfileAddress)

  const submit = () => {
    phone.id ? dispatch(WhatsappActions.updatePhoneRequest(company.id, phone)) :
    dispatch(WhatsappActions.createPhoneRequest(company.id, phone.number))
  }

  const setInput = (key, value) => {
    key === 'whatsapp' && dispatch(WhatsappActions.updateWhatsappStatusRequest(company.id, phone.id, value))
    key === 'phone' && dispatch(WhatsappActions.setInputValue(key, value))
  }

  return (
    <Front
      data={{ phone: phone.number, active: whatsappStatus }}
      submit={submit}
      onFieldChange={setInput}
      hasAddress={hasAddress}
      hasPhone={hasPhone}
      apiFeedback={apiFeedback}
      gotoTab={props.gotoTab}
      pageRef={props.pageRef}
    />
  );
}
export default Profile;
