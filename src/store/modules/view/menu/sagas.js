import { takeLatest, all, call, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';

import { Company } from '../../../../services/api/view/company';
import { Product } from '../../../../services/api/view/products';

function* loadCompany({ payload }) {
  const { slug } = payload

  try {
    const result = yield call(Company.show, slug)

    yield put(Actions.loadCompanySuccess(result.data))
  } catch(err) {
    yield put(Actions.loadCompanyFailed(err))
  }
}

function* getSlugAndRedirect({ payload }) {
  const { companyId } = payload

  try {
    const result = yield call(Company.showById, companyId)

    const { slug } = result.data.data.attributes

    window.location.href = `${process.env.REACT_APP_SITE_URL}/${slug}`    
  } catch(err) {
    window.location.href = process.env.REACT_APP_SITE_URL
  }
}

function* loadAllProductSections({ payload }) {  
  const { sections } = payload
  
  for (const i in sections) {
    const result = yield call(Product.bySection, sections[i].id)

    const products = result.data.data

    const { name, description } = sections[i].attributes
  
    const items = products.map(product => {

      const { name, description, position, price, image } = product.attributes
      return { id: product.id, name, description, position, price, active: true, image }

    });

    const section = { id: sections[i].id, name, description, items }

    yield put(Actions.addProductSectionInMenu(section))
  }
}

export default all([
  takeLatest(Types.LOAD_COMPANY_REQUEST, loadCompany),
  takeLatest(Types.LOAD_ALL_PRODUCT_SECTIONS_REQUEST, loadAllProductSections),
  takeLatest(Types.GET_SLUG_AND_REDIRECT, getSlugAndRedirect)
]);