export const Types = {
  CREATE_COMPANY_REQUEST: '@company/CREATE_COMPANY_REQUEST',
  CREATE_COMPANY_SUCCESS: '@company/CREATE_COMPANY_SUCCESS',
  CREATE_COMPANY_FAILED: '@company/CREATE_COMPANY_FAILED',

  LOAD_OWNER_COMPANIES_REQUEST: '@company/LOAD_OWNER_COMPANIES_REQUEST',
  LOAD_OWNER_COMPANIES_SUCCESS: '@company/LOAD_OWNER_COMPANIES_SUCCESS',
  LOAD_OWNER_COMPANIES_FAILED: '@company/LOAD_OWNER_COMPANIES_FAILED',

  UPDATE_MENU_ACTIVE_REQUEST: '@company/UPDATE_MENU_ACTIVE_REQUEST',
  UPDATE_MENU_ACTIVE_SUCCESS: '@company/UPDATE_MENU_ACTIVE_SUCCESS',
  UPDATE_MENU_ACTIVE_FAILED: '@company/UPDATE_MENU_ACTIVE_FAILED'
}

export const Actions = {

  createCompanyRequest: (name) => ({
    type: Types.CREATE_COMPANY_REQUEST,
    payload: { name }
  }),

  createCompanySuccess: () => ({
    type: Types.CREATE_COMPANY_SUCCESS
  }),

  createCompanyFailed: (err) => ({
    type: Types.CREATE_COMPANY_FAILED,
    payload: { err }
  }),



  loadOwnerCompaniesRequest: () => ({
    type: Types.LOAD_OWNER_COMPANIES_REQUEST
  }),

  loadOwnerCompaniesSuccess: (companies) => ({
    type: Types.LOAD_OWNER_COMPANIES_SUCCESS,
    payload: { companies }
  }),

  loadOwnerCompaniesFailed: (err) => ({
    type: Types.LOAD_OWNER_COMPANIES_FAILED,
    payload: { err }
  }),



  updateMenuActiveRequest: (companyId, active) => ({
    type: Types.UPDATE_MENU_ACTIVE_REQUEST,
    payload: { companyId, active }
  }),

  updateMenuActiveSuccess: (companyId, active) => ({
    type: Types.UPDATE_MENU_ACTIVE_SUCCESS,
    payload: { companyId, active }
  }),

  updateMenuActiveFailed: (err) => ({
    type: Types.UPDATE_MENU_ACTIVE_FAILED,
    payload: { err }
  })
}