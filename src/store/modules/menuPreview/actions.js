export const Types = {
  LOAD_COMPANY_REQUEST: '@menu-preview/LOAD_COMPANY_REQUEST',
  LOAD_COMPANY_SUCCESS: '@menu-preview/LOAD_COMPANY_SUCCESS',
  LOAD_COMPANY_FAILED: '@menu-preview/LOAD_COMPANY_FAILED',

  LOAD_PRODUCT_SECTIONS_REQUEST: '@menu-preview/LOAD_PRODUCT_SECTIONS_REQUEST',
  LOAD_PRODUCT_SECTIONS_SUCCESS: '@menu-preview/LOAD_PRODUCTS_SECTIONS_SUCCESS',
  LOAD_PRODUCT_SECTIONS_FAILED: '@menu-preview/LOAD_PRODUCT_SECTIONS_FAILED'

}

export const Actions = {

  loadCompanyRequest: (slug) => ({
    type: Types.LOAD_COMPANY_REQUEST,
    payload: { slug }
  }),

  loadCompanySuccess: (data) => ({
    type: Types.LOAD_COMPANY_SUCCESS,
    payload: { data }
  }),

  loadCompanyFailed: (err) => ({
    type: Types.LOAD_COMPANY_FAILED,
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
  
}
