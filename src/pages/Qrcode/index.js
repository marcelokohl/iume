import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as CompanyActions } from '../../store/modules/company/actions'

import Front from './front';

const QrCode = () => {
  const dispatch = useDispatch();

  const company = useSelector(state => state.profile.companies[0])

  const { id } = company
  const { slug, active } = company.attributes

  const updateMenuActive = active => {
    dispatch(CompanyActions.updateMenuActiveRequest(company.id, active))
  }

  return (
    <Front
      actived={active}
      setActived={updateMenuActive}
      slug={slug}
      id={id}
    />
  );
}

export default QrCode;
