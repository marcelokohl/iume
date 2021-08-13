export const Types = {
  LOAD_ADDRESS_BY_CEP_REQUEST: '@address/LOAD_ADDRESS_BY_CEP_REQUEST',
  LOAD_ADDRESS_BY_CEP_SUCCESS: '@address/LOAD_ADDRESS_BY_CEP_SUCCESS',
  LOAD_ADDRESS_BY_CEP_FAILED: '@address/LOAD_ADDRESS_BY_CEP_FAILED',

  SAVE_ADDRESS_REQUEST: '@address/SAVE_ADDRESS_REQUEST',
  SAVE_ADDRESS_SUCCESS: '@address/SAVE_ADDRESS_SUCCESS',
  SAVE_ADDRESS_FAILED: '@address/SAVE_ADDRESS_FAILED',

  SET_INPUT_VALUE: '@address/SET_INPUT_VALUE'
}

export const Actions = {
  setInputValue: (key, value) => ({
    type: Types.SET_INPUT_VALUE,
    payload: { key, value }
  }),



  loadAddressByCepRequest: (cep) => ({
    type: Types.LOAD_ADDRESS_BY_CEP_REQUEST,
    payload: { cep }
  }),

  loadAddressByCepSuccess: (neighborhood, city, state, street) => ({
    type: Types.LOAD_ADDRESS_BY_CEP_SUCCESS,
    payload: { neighborhood, city, state, street }
  }),

  loadAddressByCepFailed: (err) => ({
    type: Types.LOAD_ADDRESS_BY_CEP_FAILED,
    payload: { err }
  }),



  saveAddressRequest: (companyId, info) => ({
    type: Types.SAVE_ADDRESS_REQUEST,
    payload: { companyId, info }
  }),
  
  saveAddressSuccess: () => ({
    type: Types.SAVE_ADDRESS_SUCCESS
  }),

  saveAddressFailed: (err) => ({
    type: Types.SAVE_ADDRESS_FAILED,
    payload: { err }
  })
}