export const Types = {

  UPDATE_PERSONAL_DATA_REQUEST: '@pesonalData/UPDATE_PERSONAL_DATA_REQUEST',
  UPDATE_PERSONAL_DATA_SUCCESS: '@pesonalData/UPDATE_PERSONAL_DATA_SUCCESS',
  UPDATE_PERSONAL_DATA_FAILED: '@pesonalData/UPDATE_PERSONAL_DATA_FAILED',

  RESET_PERSONAL_DATA_FEEDBACK: '@pesonalData/RESET_PERSONAL_DATA_FEEDBACK',

  SET_INPUT_VALUE: '@personalData/SET_INPUT_VALUE'
}

export const Actions = {

  setInputValue: (key, value) => ({
    type: Types.SET_INPUT_VALUE,
    payload: { key, value }
  }),

  resetPersonalDataFeedback: () => ({
    type: Types.RESET_PERSONAL_DATA_FEEDBACK
  }),



  updatePersonalDataRequest: (companyId, name) => ({
    type: Types.UPDATE_PERSONAL_DATA_REQUEST,
    payload: { companyId, name }
  }),
  
  updatePersonalDataSuccess: (company) => ({ 
    type: Types.UPDATE_PERSONAL_DATA_SUCCESS,
    payload: { company }
  }),
  
  updatePersonalDataFailed: (err) => ({ 
    type: Types.UPDATE_PERSONAL_DATA_FAILED,
    payload: { err }
  })

}
