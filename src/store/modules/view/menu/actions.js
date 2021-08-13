export const Types = {
  GET_SLUG_AND_REDIRECT: '@view-menu/GET_SLUG_AND_REDIRECT',

  LOAD_COMPANY_REQUEST: '@view-menu/LOAD_COMPANY_REQUEST',
  LOAD_COMPANY_SUCCESS: '@view-menu/LOAD_COMPANY_SUCCESS',
  LOAD_COMPANY_FAILED: '@view-menu/LOAD_COMPANY_FAILED',

  LOAD_ALL_PRODUCT_SECTIONS_REQUEST: '@view-menu/LOAD_ALL_PRODUCT_SECTIONS_REQUEST',
  ADD_PRODUCT_SECTION_IN_MENU: '@view-menu/ADD_PRODUCT_SECTION_IN_MENU'
}

export const Actions = {

  getSlugAndRedirect: (companyId) => ({
    type: Types.GET_SLUG_AND_REDIRECT,
    payload: { companyId }
  }),



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



  loadAllProductSectionsRequest: (sections) => ({
    type: Types.LOAD_ALL_PRODUCT_SECTIONS_REQUEST,
    payload: { sections }
  }),

  addProductSectionInMenu: (section) => ({
    type: Types.ADD_PRODUCT_SECTION_IN_MENU,
    payload: { section }
  })
  
}
