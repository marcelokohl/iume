import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as ProductSectionsActions } from '../../../store/modules/productSections/actions';
import { Actions as SectionActions } from '../../../store/modules/sections/actions';

import Front from './front';

function Page(props) {

  const dispatch = useDispatch()

  const companyId = useSelector(state => state.profile.companies[0].id)
  const companyName = useSelector(state => state.profile.companies[0].attributes.name)

  const productSections = useSelector(state => state.productSections.list.map(section => {
    const items = section.items.map(item => item)
    return { ...section, items }
  }))

  const productSectionsLoaded = useSelector(state => state.productSections.listLoaded)

  const sections = useSelector(state => state.sections.list)

  useEffect(() => {
    if(!productSections.length) dispatch(SectionActions.loadSectionsRequest(companyId))
  }, [])

  useEffect(() => {
    (sections.length && !productSectionsLoaded) &&
      dispatch(ProductSectionsActions.loadProductSectionsRequest(sections))
  }, [sections])

  const sortState = (data) => {
    const sections = data.map(section => {
      const items = section.items.map(item => item)
      return { ...section, items }
    })

    // console.log(sections)
    dispatch(ProductSectionsActions.updateProductSectionPositions(sections))
  }

  const moveProductToAnotherSection = (data) => {
    // console.log(data)
    const { startSectionId, endSectionId, itemId, position } = data
    dispatch(ProductSectionsActions.moveProductToAnotherSectionRequest(startSectionId, endSectionId, itemId, position))
  }

  const sortSections = (data) => {
    dispatch(SectionActions.sortSectionsRequest(companyId))
  }

  const sortProductsInSection = (data) => {
    const { sectionId, itemIds } = data
    dispatch(ProductSectionsActions.sortSectionProductsRequest(sectionId, itemIds))
  }

  return (
    <Front
      company={{ name: companyName }}
      data={productSections}
      apiLoaded={productSectionsLoaded}
      setData={sortState}
      apiFeedbak={null}
      sortItems={moveProductToAnotherSection}
      sortSections={sortSections}
      sortItemsInSection={sortProductsInSection}
     />
  );
}

export default Page;
