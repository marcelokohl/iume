import { takeLatest, all, call, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';

import { MenuPreview } from '../../../services/api/menuPreview';

function* loadCompany({ payload }) {
  const { slug } = payload

  try {
    const result = yield call(MenuPreview.getRestaurant, slug)

    yield put(Actions.loadCompanySuccess(result.data))
  } catch(err) {
    yield put(Actions.loadCompanyFailed(err))
  }
}

function* loadProductSections({ payload }) {  
  const { sections } = payload

  let productSections = []

  for (const i in sections) {
    const result = yield call(MenuPreview.getProductsBySection, sections[i].id)

    const products = result.data.data

    const { name } = sections[i].attributes
  
    const items = products.map(product => {

      const { name, description, position, price, active, image } = product.attributes
      return { id: product.id, name, description, position, price, active: true, image }

    });

    const section = { id: sections[i].id, name, items }
    productSections.push(section)
  }
  
  yield put(Actions.loadProductSectionsSuccess(productSections))
}

export default all([
  takeLatest(Types.LOAD_COMPANY_REQUEST, loadCompany),
  takeLatest(Types.LOAD_PRODUCT_SECTIONS_REQUEST, loadProductSections)
]);