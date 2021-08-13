import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as ProductSectionsActions } from '../../store/modules/productSections/actions';
import { Actions as SectionActions } from '../../store/modules/sections/actions';
import { Actions as OwnerActions } from '../../store/modules/owner/actions';

import Front from './front';

function Page() {

  const dispatch = useDispatch()

  const companyId = useSelector(state => state.profile.companies[0].id)

  const { name, slug } = useSelector(state => state.profile.companies[0].attributes)

  const { list, listLoaded, apiFeedback } = useSelector(state => state.productSections)

  const sections = useSelector(state => state.sections.list)

  useEffect(() => {
    dispatch(SectionActions.resetApiFeedback())
    dispatch(SectionActions.loadSectionsRequest(companyId))
    dispatch(OwnerActions.getCurrentOwnerRequest())
  }, [])

  useEffect(() => {
    sections.length &&
      dispatch(ProductSectionsActions.loadProductSectionsRequest(sections))
  }, [sections])

  const createProduct = (product) => {
    dispatch(ProductSectionsActions.createProductRequest(product))
  }

  const updateProduct = (product) => {
    const { id, currentSectionId, sectionId, active } = product

    if('name' in product) {
      (currentSectionId === sectionId) ?
        dispatch(ProductSectionsActions.updateProductRequest(product)) :
        dispatch(ProductSectionsActions.updateProductAndChangeSectionRequest(product))
    } else {
      dispatch(ProductSectionsActions.updateProductStatusRequest(sectionId, id, active))
    }
  }

  const removeProduct = (product) => {
    const { sectionId, id } = product
    dispatch(ProductSectionsActions.removeProductRequest(sectionId, id))
  }

  const checkMaxProducts = () => {
    const limit = process.env.REACT_APP_ENVIRONMENT === 'development' ? 20 : 300

    const total = list.reduce((total, section) => {
      return total + section.items.length
    }, 0)
    
    return total >= limit;
  }

  return (
    <Front
      data={list}
      apiLoaded={listLoaded}
      apiFeedback={apiFeedback}
      company={{ name, slug }}
      newItem={createProduct}
      updateItem={updateProduct}
      removeItem={removeProduct}
      maxProducts={checkMaxProducts()}
    />
  );
}

export default Page;
