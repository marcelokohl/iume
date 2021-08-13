import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as ViewActions } from '../../../../store/modules/menuPreview/actions';

import Front from '../front';

const View = () => {
  const dispatch = useDispatch()

  const company = useSelector(state => state.profile.companies[0])
  
  const { id } = company
  
  const { name, slug } = company.attributes

  const { sections, productSections, apiLoaded } = useSelector(state => state.menuPreview)

  useEffect(() => {
    dispatch(ViewActions.loadCompanyRequest(slug))
  }, [])

  useEffect(() => {
    sections.length && dispatch(ViewActions.loadProductSectionsRequest(sections))
  }, [sections])

  return (
    <Front
      data={productSections}
      enabled={true}
      apiLoaded={apiLoaded}
      company={{ name, id }}
    />
  );
}

export default View;
