export const Types = {

  CREATE_PHONE_REQUEST: '@whatsapp/CREATE_PHONE_REQUEST',
  CREATE_PHONE_SUCCESS: '@whatsapp/CREATE_PHONE_SUCCESS',
  CREATE_PHONE_FAILED: '@whatsapp/CREATE_PHONE_FAILED',

  UPDATE_PHONE_REQUEST: '@whatsapp/UPDATE_PHONE_REQUEST',
  UPDATE_PHONE_SUCCESS: '@whatsapp/UPDATE_PHONE_SUCCESS',
  UPDATE_PHONE_FAILED: '@whatsapp/UPDATE_PHONE_FAILED',

  UPDATE_WHATSAPP_STATUS_REQUEST: '@whatsapp/UPDATE_WHATSAPP_STATUS_REQUEST',
  UPDATE_WHATSAPP_STATUS_SUCCESS: '@whatsapp/UPDATE_WHATSAPP_STATUS_SUCCESS',
  UPDATE_WHATSAPP_STATUS_FAILED: '@whatsapp/UPDATE_WHATSAPP_STATUS_FAILED',

  SET_INPUT_VALUE: '@whatsapp/SET_INPUT_VALUE'
}

export const Actions = {
  setInputValue: (key, value) => ({
    type: Types.SET_INPUT_VALUE,
    payload: { key, value }
  }),

  createPhoneRequest: (companyId, phone) => ({
    type: Types.CREATE_PHONE_REQUEST,
    payload: { companyId, phone }
  }),

  createPhoneSuccess: (id) => ({
    type: Types.CREATE_PHONE_SUCCESS,
    payload: { id }
  }),

  createPhoneFailed: (err) => ({
    type: Types.CREATE_PHONE_FAILED,
    payload: { err }
  }),



  updatePhoneRequest: (companyId, phone) => ({
    type: Types.UPDATE_PHONE_REQUEST,
    payload: { companyId, phone }
  }),

  updatePhoneSuccess: () => ({
    type: Types.UPDATE_PHONE_SUCCESS
  }),

  updatePhoneFailed: (err) => ({
    type: Types.UPDATE_PHONE_FAILED,
    payload: { err }
  }),



  updateWhatsappStatusRequest: (companyId, phoneId, status) => ({
    type: Types.UPDATE_WHATSAPP_STATUS_REQUEST,
    payload: { companyId, phoneId, status }
  }),

  updateWhatsappStatusSuccess: (status) => ({
    type: Types.UPDATE_WHATSAPP_STATUS_SUCCESS,
    payload: { status }
  }),

  updateWhatsappStatusFailed: (err) => ({
    type: Types.UPDATE_WHATSAPP_STATUS_FAILED,
    payload: { err }
  })
}
