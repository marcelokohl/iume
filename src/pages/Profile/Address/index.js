import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Actions as Address } from '../../../store/modules/companyProfile/address/actions';

import Front from './front';

const Profile = props => {
  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])

  const {
    cep, street, number, complement,
    neighborhood, city, state, disableNeighborhood
  } = useSelector(state => state.companyProfileAddress)

  const { apiFeedback } = useSelector(state => state.companyProfileAddress)

  const setInputValue = (key, value) => {
    dispatch(Address.setInputValue(key, value))

    if(key === 'cep' && value.length === 9) {
      dispatch(Address.loadAddressByCepRequest(value))
    }
  }

  const saveAddress = () => {
    const payload = { cep, street, number, complement, neighborhood }

    dispatch(Address.saveAddressRequest(company.id, payload))
  }

  return (
    <Front
      data={{
        cep, street, number, complement,
        neighborhood, city, state, disableNeighborhood
      }}
      apiFeedback={apiFeedback}
      onFieldChange={setInputValue}
      submit={saveAddress}
      pageRef={props.pageRef}
    />
  );
}
export default Profile;
