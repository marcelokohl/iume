export const Types = {

  UPDATE_SLUG_REQUEST: '@settigns/UPDATE_SLUG_REQUEST',
  UPDATE_SLUG_SUCCESS: '@settigns/UPDATE_SLUG_SUCCESS',
  UPDATE_SLUG_FAILED: '@settigns/UPDATE_SLUG_FAILED',

  CHECK_SLUG_AVAILABILITY_REQUEST: '@settigns/CHECK_SLUG_AVAILABILITY_REQUEST',
  CHECK_SLUG_AVAILABILITY_SUCCESS: '@settigns/CHECK_SLUG_AVAILABILITY_SUCCESS',
  CHECK_SLUG_AVAILABILITY_FAILED: '@settigns/CHECK_SLUG_AVAILABILITY_FAILED',
  RESET_SLUG_CHECK_STATUS: '@settigns/RESET_SLUG_CHECK_STATUS',

  SET_INPUT_VALUE: '@settigns/SET_INPUT_VALUE',
  RESET_COMPANY_PROFILE_FEEDBACKS: '@settigns/RESET_COMPANY_PROFILE_FEEDBACKS'
}

export const Actions = {

  setInputValue: (key, value) => ({
    type: Types.SET_INPUT_VALUE,
    payload: { key, value }
  }),

  resetCompanyProfileFeedbacks: () => ({
    type: Types.RESET_COMPANY_PROFILE_FEEDBACKS
  }),



  updateSlugRequest: (companyId, slug) => ({
    type: Types.UPDATE_SLUG_REQUEST,
    payload: { companyId, slug }
  }),
  
  updateSlugSuccess: (company) => ({ 
    type: Types.UPDATE_SLUG_SUCCESS,
    payload: { company }
  }),
  
  updateSlugFailed: (err) => ({ 
    type: Types.UPDATE_SLUG_FAILED,
    payload: { err }
  }),



  checkSlugAvailabilityRequest: (slug) => ({
    type: Types.CHECK_SLUG_AVAILABILITY_REQUEST,
    payload: { slug }
  }),

  checkSlugAvailabilitySuccess: () => ({
    type: Types.CHECK_SLUG_AVAILABILITY_SUCCESS
  }),

  checkSlugAvailabilityFailed: (err) => ({
    type: Types.CHECK_SLUG_AVAILABILITY_FAILED,
    payload: { err }
  }),

  resetSlugCheckStatus: () => ({
    type: Types.RESET_SLUG_CHECK_STATUS
  })

}
