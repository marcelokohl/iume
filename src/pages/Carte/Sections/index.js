import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as SectionActions } from '../../../store/modules/sections/actions';
import { Actions as ProductSectionsActions } from '../../../store/modules/productSections/actions';

import Front from './front';

function Page() {
  const dispatch = useDispatch()

  const companyId = useSelector(state => state.profile.companies[0].id)
  const companyName = useSelector(state => state.profile.companies[0].attributes.name)

  const sections = useSelector(state =>
    state.sections.list.map(section => ({
      id: section.id,
      name: section.attributes.name,
      description: section.attributes.description,
      active: section.attributes.active
    }))
  )

  const productSections = useSelector(state => state.productSections.list)
  const sectionsList = useSelector(state => state.sections.list)
  const sectionsLoaded = useSelector(state => state.sections.listLoaded)
  const sectionsApiFeedback = useSelector(state => state.sections.apiFeedback)

  useEffect(() => {
    !sections.length && dispatch(SectionActions.loadSectionsRequest(companyId))
  }, [])

  useEffect(() => {
    (sectionsList.length && !productSections.length) &&
      dispatch(ProductSectionsActions.loadProductSectionsRequest(sectionsList))
  }, [sectionsList])

  const createSection = (section) => {
    dispatch(SectionActions.createSectionRequest(companyId, section))
  }

  const updateSection = (section) => {
    if('name' in section) {
      dispatch(SectionActions.updateSectionRequest(companyId, section))
    } else {
      dispatch(SectionActions.updateSectionStatusRequest(companyId, section))
    }
  }

  const removeSection = (section) => {
    dispatch(SectionActions.removeSectionRequest(companyId, section.id))
  }

  const checkMaxSections = () => {
    const limit = process.env.REACT_APP_ENVIRONMENT === 'development' ? 5 : 30

    return sections.length >= limit
  }

  return (
    <Front
      company={{ name: companyName }}
      data={sections}
      apiLoaded={sectionsLoaded}
      apiFeedback={sectionsApiFeedback}
      newSection={createSection}
      updateSection={updateSection}
      removeSection={removeSection}
      maxSections={checkMaxSections()}
     />
  );
}

export default Page;
