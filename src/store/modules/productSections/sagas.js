import { call, all, takeLatest, put } from 'redux-saga/effects';
import { Types, Actions } from './actions';
import { Product } from '../../../services/api/products';
import { isValidImage } from '../../../utils/checkImgUrl';

function* createProduct({ payload }) {
  const { product } = payload
  const { sectionId, name, description, active, price, image } = product
  
  const data = {
    "product": {
      "name": name,
      "description": description,
      "active": active,
      "price": price,
      ...image && { "image": { "data": image } }
    }
  }

  try {
    const result = yield call(Product.create, sectionId, data)
  
    const productResult = result.data.data

    yield put(Actions.createProductSuccess(sectionId, productResult))    
  } catch(err) {
    yield put(Actions.createProductFailed(err))
  }
}

function* updateProductStatus({ payload }) {
  const { sectionId, productId, active } = payload

  const data = { "product": { "active": active } }

  try {
    yield call(Product.update, sectionId, productId, data)

    yield put(Actions.updateProductStatusSuccess(sectionId, productId, active))
  } catch(err) {
    yield put(Actions.updateProductStatusFailed(sectionId, productId, active, err))
  }
}

function* updateProduct({ payload }) {
  const { product } = payload
  const { sectionId, id, name, image, description, price, active } = product
  
  const data = {
    "product": {
      "name": name,
      "description": description,
      "active": active,
      "price": price,
      "image_destroy": (image === null),
      ...(isValidImage(image) && { "image": { "data": image } })
    }
  }

  try {
    const result = yield call(Product.update, sectionId, id, data)
  
    const product = result.data.data

    const { name, price, description, active, image } = product.attributes

    const updatedProduct = { id: product.id, name, price, description, active, image }
    
    yield put(Actions.updateProductSuccess(sectionId, updatedProduct))
  } catch(err) {
    yield put(Actions.updateProductFailed(err))
  }
}

function* updateProductAndChangeSection({ payload }) {
  const { product } = payload

  const { currentSectionId, sectionId, id, name, image, 
          description, price, active, position } = product
  
  const data = {
    "product": {
      "name": name,
      "description": description,
      "active": active,
      "price": price,
      "image_destroy": (image === null),
      "section_id": sectionId,
      "position": position,
      ...(isValidImage(image) && { "image": { "data": image } })
    }
  }

  try {
    const result = yield call(Product.update, currentSectionId, id, data)
  
    const product = result.data.data

    const { name, price, description, active, image, position } = product.attributes

    const updatedProduct = { id: product.id, name, price, description, position, active, image }
    
    yield put(Actions.updateProductAndChangeSectionSuccess(currentSectionId, sectionId, updatedProduct))
  } catch(err) {
    yield put(Actions.updateProductAndChangeSectionFailed(err))
  }
}

function* removeProduct({ payload }) {
  const { sectionId, productId } = payload

  try {
    yield call(Product.delete, sectionId, productId)

    yield put(Actions.removeProductSuccess(sectionId, productId))
  } catch(err) {
    yield put(Actions.removeProductFailed(err))
  }
}

function* loadProductSections({ payload }) {  
  const { sections } = payload

  let productSections = []

  for (const i in sections) {
    const result = yield call(Product.bySection, sections[i].id)

    const products = result.data.data

    const { name, active } = sections[i].attributes
  
    const items = products.map(product => {

      const { name, description, position, price, active, image } = product.attributes
      return { id: product.id, name, description, position, price, active, image }

    });

    const section = { id: sections[i].id, name, active, items }
    productSections.push(section)
  }
  
  yield put(Actions.loadProductSectionsSuccess(productSections))
}

function* moveProductToAnotherSection({ payload }) {
  const { startSectionId, endSectionId, itemId, position } = payload
  
  const data = { "product": { "section_id": endSectionId, "position": position } }

  try {
    yield call(Product.update, startSectionId, itemId, data)

    yield put(Actions.moveProductToAnotherSectionSuccess())
  } catch(err) {
    yield put(Actions.moveProductToAnotherSectionFailed(err))
  }
}

function* sortSectionProducts({ payload }) {
  const { sectionId, productIds } = payload

  const data = { "product": { "ids": productIds } }

  try {
    yield call(Product.sortProducts, sectionId, data)

    yield put(Actions.sortSectionProductsSuccess())
  } catch(err) {
    yield put(Actions.sortSectionProductsFailed(err))
  }
}

export default all([
  takeLatest(Types.CREATE_PRODUCT_REQUEST, createProduct),
  takeLatest(Types.LOAD_PRODUCT_SECTIONS_REQUEST, loadProductSections),
  takeLatest(Types.UPDATE_PRODUCT_STATUS_REQUEST, updateProductStatus),
  takeLatest(Types.UPDATE_PRODUCT_REQUEST, updateProduct),
  takeLatest(Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_REQUEST, updateProductAndChangeSection),
  takeLatest(Types.REMOVE_PRODUCT_REQUEST, removeProduct),
  takeLatest(Types.MOVE_PRODUCT_TO_ANOTHER_SECTION_REQUEST, moveProductToAnotherSection),
  takeLatest(Types.SORT_SECTION_PRODUCTS_REQUEST, sortSectionProducts)
])