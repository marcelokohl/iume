import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as SectionActions } from '../../../store/modules/sections/actions';

import Front from './front';

function Page(props) {
  const dispatch = useDispatch()

  const companyId = useSelector(state => state.profile.companies[0].id)
  
  const { name } = useSelector(state => state.profile.companies[0].attributes)
  
  const { apiFeedback } = useSelector(state => state.sections)

  useEffect(() => {
    dispatch(SectionActions.loadSectionsRequest(companyId))
  }, [])

  const createSection = (section) => {
    dispatch(SectionActions.createSectionRequest(companyId, section))
  }

  return (
    <Front
      company={{ name }}
      apiFeedback={apiFeedback}
      newSection={createSection}
     />
  );
}

export default Page;
