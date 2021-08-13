export const Types = {
  LOGIN_REQUEST: '@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@auth/LOGIN_SUCCESS',
  LOGIN_FAILED: '@auth/LOGIN_FAILED',

  LOGOUT_REQUEST: '@auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: '@auth/LOGOUT_SUCCESS',
  LOGOUT_FAILED: '@auth/LOGOUT_FAILED',

  SET_TOKEN_ON_REQUESTS: '@auth/SET_TOKEN_ON_REQUESTS',
  SAVE_TOKEN_TO_RECOVER_PASSWORD: '@auth/SAVE_TOKEN_TO_RECOVER_PASSWORD',

  RESET_API_FEEDBACK: '@auth/RESET_API_FEEDBACK',

  ACCESS_DENIED: '@auth/ACCESS_DENIED'
}

export const Actions = {
  
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),
  
  loginSuccess: (token) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { token }
  }),
  
  loginFailed: (err) => ({
    type: Types.LOGIN_FAILED,
    payload: { err }
  }),




  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST
  }),
  
  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS
  }),
  
  logoutFailed: (err) => ({
    type: Types.LOGOUT_FAILED,
    payload: { err }
  }),



  setTokenOnRequests: (token) => ({
    type: Types.SET_TOKEN_ON_REQUESTS,
    payload: { auth: { token: token } }
  }),
  
  saveTokenToRecoverPassword: (token) => ({
    type: Types.SAVE_TOKEN_TO_RECOVER_PASSWORD,
    payload: { token }
  }),

  
  
  accessDenied: () => ({
    type: Types.ACCESS_DENIED
  }),

  resetApiFeedBack: () => ({
    type: Types.RESET_API_FEEDBACK
  }),
}


