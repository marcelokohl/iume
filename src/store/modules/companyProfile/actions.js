export const Types = {

  LOAD_COMPANY_PROFILE_REQUEST: '@companyProfile/LOAD_COMPANY_PROFILE_REQUEST',
  LOAD_COMPANY_PROFILE_SUCCESS: '@companyProfile/LOAD_COMPANY_PROFILE_SUCCESS',
  LOAD_COMPANY_PROFILE_FAILED: '@companyProfile/LOAD_COMPANY_PROFILE_FAILED'
}

export const Actions = {
  
  loadCompanyProfileRequest: (companyId) => ({
    type: Types.LOAD_COMPANY_PROFILE_REQUEST,
    payload: { companyId }
  }),

  loadCompanyProfileSuccess: (result) => ({
    type: Types.LOAD_COMPANY_PROFILE_SUCCESS,
    payload: { result }
  }),

  loadCompanyProfileFailed: (err) => ({
    type: Types.LOAD_COMPANY_PROFILE_FAILED,
    payload: { err }
  })
}
