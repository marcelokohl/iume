export const Types = {
  CHECK_EMAIL_REQUEST: '@emails/CHECK_EMAIL_REQUEST',
  CHECK_EMAIL_SUCCESS: '@emails/CHECK_EMAIL_SUCCESS',
  CHECK_EMAIL_FAILED: '@emails/CHECK_EMAIL_FAILED',

  EMAIL_NOT_REGISTERED: '@owner/EMAIL_NOT_REGISTERED',

  RESET_API_FEEDBACK: '@owner/RESET_API_FEEDBACK'
}

export const Actions = {

  checkEmailRequest: (email) => ({
    type: Types.CHECK_EMAIL_REQUEST,
    payload: { email }
  }),
  
  checkEmailSuccess: (email) => ({ 
    type: Types.CHECK_EMAIL_SUCCESS,
    payload: { email }
  }),
  
  checkEmailFailed: (err) => ({ 
    type: Types.CHECK_EMAIL_FAILED,
    payload: { err }
  }),



  
  emailNotRegistered: (email) => ({
    type: Types.EMAIL_NOT_REGISTERED,
    payload: { email }
  }),

  resetApiFeedback: () => ({
    type: Types.RESET_API_FEEDBACK
  })
}
