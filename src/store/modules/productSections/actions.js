export const Types = {
  CREATE_PRODUCT_REQUEST: '@productSections/CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS: '@productSections/CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_FAILED: '@productSections/CREATE_PRODUCT_FAILED',

  UPDATE_PRODUCT_STATUS_REQUEST: '@productSections/UPDATE_PRODUCT_STATUS_REQUEST',
  UPDATE_PRODUCT_STATUS_SUCCESS: '@productSections/UPDATE_PRODUCT_STATUS_SUCCESS',
  UPDATE_PRODUCT_STATUS_FAILED: '@productSections/UPDATE_PRODUCT_STATUS_FAILED',

  UPDATE_PRODUCT_REQUEST: '@productSections/UPDATE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_SUCCESS: '@productSections/UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_FAILED: '@productSections/UPDATE_PRODUCT_FAILED',

  UPDATE_PRODUCT_AND_CHANGE_SECTION_REQUEST: '@productSections/UPDATE_PRODUCT_AND_CHANGE_SECTION_REQUEST',
  UPDATE_PRODUCT_AND_CHANGE_SECTION_SUCCESS: '@productSections/UPDATE_PRODUCT_AND_CHANGE_SECTION_SUCCESS',
  UPDATE_PRODUCT_AND_CHANGE_SECTION_FAILED: '@productSections/UPDATE_PRODUCT_AND_CHANGE_SECTION_FAILED',

  REMOVE_PRODUCT_REQUEST: '@productSections/REMOVE_PRODUCT_REQUEST',
  REMOVE_PRODUCT_SUCCESS: '@productSections/REMOVE_PRODUCT_SUCCESS',
  REMOVE_PRODUCT_FAILED: '@productSections/REMOVE_PRODUCT_FAILED',
  
  LOAD_PRODUCT_SECTIONS_REQUEST: '@productSections/LOAD_PRODUCT_SECTIONS_REQUEST',
  LOAD_PRODUCT_SECTIONS_SUCCESS: '@productSections/LOAD_PRODUCTS_SECTIONS_SUCCESS',
  LOAD_PRODUCT_SECTIONS_FAILED: '@productSections/LOAD_PRODUCT_SECTIONS_FAILED',

  UPDATE_PRODUCT_SECTION_POSITIONS: '@productSections/UPDATE_PRODUCT_SECTION_POSITIONS',

  MOVE_PRODUCT_TO_ANOTHER_SECTION_REQUEST: '@productSections/MOVE_PRODUCT_TO_ANOTHER_SECTION_REQUEST',
  MOVE_PRODUCT_TO_ANOTHER_SECTION_SUCCESS: '@productSections/MOVE_PRODUCT_TO_ANOTHER_SECTION_SUCCESS',
  MOVE_PRODUCT_TO_ANOTHER_SECTION_FAILED: '@productSections/MOVE_PRODUCT_TO_ANOTHER_SECTION_FAILED',

  SORT_SECTION_PRODUCTS_REQUEST: '@productSections/SORT_SECTION_PRODUCTS_REQUEST',
  SORT_SECTION_PRODUCTS_SUCCESS: '@productSections/SORT_SECTION_PRODUCTS_SUCCESS',
  SORT_SECTION_PRODUCTS_FAILED: '@productSections/SORT_SECTION_PRODUCTS_FAILED'
}

export const Actions = {

  createProductRequest: (product) => ({
    type: Types.CREATE_PRODUCT_REQUEST,
    payload: { product }
  }),

  createProductSuccess: (sectionId, product) => ({
    type: Types.CREATE_PRODUCT_SUCCESS,
    payload: { sectionId, product }
  }),

  createProductFailed: (err) => ({
    type: Types.CREATE_PRODUCT_FAILED,
    payload: { err }
  }),



  updateProductStatusRequest: (sectionId, productId, active) => ({
    type: Types.UPDATE_PRODUCT_STATUS_REQUEST,
    payload: { sectionId, productId, active }
  }),

  updateProductStatusSuccess: (sectionId, productId, active) => ({
    type: Types.UPDATE_PRODUCT_STATUS_SUCCESS,
    payload: { sectionId, productId, active }
  }),

  updateProductStatusFailed: (sectionId, productId, active, err) => ({
    type: Types.UPDATE_PRODUCT_STATUS_FAILED,
    payload: { sectionId, productId, active, err }
  }),



  updateProductRequest: (product) => ({
    type: Types.UPDATE_PRODUCT_REQUEST,
    payload: { product }
  }),

  updateProductSuccess: (sectionId, product) => ({
    type: Types.UPDATE_PRODUCT_SUCCESS,
    payload: { sectionId, product }
  }),

  updateProductFailed: (err) => ({
    type: Types.UPDATE_PRODUCT_FAILED,
    payload: { err }
  }),



  updateProductAndChangeSectionRequest: (product) => ({
    type: Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_REQUEST,
    payload: { product }
  }),

  updateProductAndChangeSectionSuccess: (currentSectionId, newSectionId, product) => ({
    type: Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_SUCCESS,
    payload: { currentSectionId, newSectionId, product }
  }),

  updateProductAndChangeSectionFailed: (err) => ({
    type: Types.UPDATE_PRODUCT_AND_CHANGE_SECTION_FAILED,
    payload: { err }
  }),



  removeProductRequest: (sectionId, productId) => ({
    type: Types.REMOVE_PRODUCT_REQUEST,
    payload: { sectionId, productId }
  }),

  removeProductSuccess: (sectionId, productId) => ({
    type: Types.REMOVE_PRODUCT_SUCCESS,
    payload: { sectionId, productId }
  }),

  removeProductFailed: (err) => ({
    type: Types.REMOVE_PRODUCT_FAILED,
    payload: { err }
  }),



  loadProductSectionsRequest: (sections) => ({
    type: Types.LOAD_PRODUCT_SECTIONS_REQUEST,
    payload: { sections }
  }),

  loadProductSectionsSuccess: (sections) => ({
    type: Types.LOAD_PRODUCT_SECTIONS_SUCCESS,
    payload: { sections }
  }),

  loadProductSectionsFailed: (err) => ({
    type: Types.LOAD_PRODUCT_SECTIONS_FAILED,
    payload: { err }
  }),


  // Before sort in API, call this action to update state in the front
  updateProductSectionPositions: (sections) => ({
    type: Types.UPDATE_PRODUCT_SECTION_POSITIONS,
    payload: { sections }
  }),


  moveProductToAnotherSectionRequest: (startSectionId, endSectionId, itemId, position) => ({
    type: Types.MOVE_PRODUCT_TO_ANOTHER_SECTION_REQUEST,
    payload: { startSectionId, endSectionId, itemId, position }
  }),

  moveProductToAnotherSectionSuccess: () => ({
    type: Types.MOVE_PRODUCT_TO_ANOTHER_SECTION_SUCCESS
  }),

  moveProductToAnotherSectionFailed: (err) => ({
    type: Types.MOVE_PRODUCT_TO_ANOTHER_SECTION_FAILED,
    payload: { err }
  }),



  sortSectionProductsRequest: (sectionId, productIds) => ({
    type: Types.SORT_SECTION_PRODUCTS_REQUEST,
    payload: { sectionId, productIds }
  }),

  sortSectionProductsSuccess: () => ({
    type: Types.SORT_SECTION_PRODUCTS_SUCCESS
  }),

  sortSectionProductsFailed: (err) => ({
    type: Types.SORT_SECTION_PRODUCTS_FAILED,
    payload: { err }
  }),
}