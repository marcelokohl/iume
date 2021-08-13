import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Actions as ViewActions } from '../../../../store/modules/view/menu/actions';

import Front from '../front';

const View = () => {
  const dispatch = useDispatch()

  const { companyId, slug } = useParams()

  const { id, name, active } = useSelector(state => state.viewMenu.companyAttr)

  const { sections, productSections, apiLoaded, notFound } = useSelector(state => state.viewMenu)

  useEffect(() => {
    companyId && dispatch(ViewActions.getSlugAndRedirect(companyId))
    slug && dispatch(ViewActions.loadCompanyRequest(slug))
  }, [])

  useEffect(() => {
    sections.length && dispatch(ViewActions.loadAllProductSectionsRequest(sections))
  }, [sections])

  return (
    <Front
      data={productSections}
      enabled={active}
      notFound={notFound}
      apiLoaded={apiLoaded}
      company={{ name, id }}
    />
  );
}

export default View;
