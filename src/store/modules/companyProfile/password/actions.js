export const Types = {
  UPDATE_PASSWORD_REQUEST: '@password/UPDATE_PASSWORD_REQUEST',
  UPDATE_PASSWORD_SUCCESS: '@password/UPDATE_PASSWORD_SUCCESS',
  UPDATE_PASSWORD_FAILED: '@password/UPDATE_PASSWORD_FAILED'
}

export const Actions = {
  updatePasswordRequest: (currentPassword, newPassword) => ({
    type: Types.UPDATE_PASSWORD_REQUEST,
    payload: { 
      currentPassword, 
      newPassword
    }
  }),

  updatePasswordSuccess: () => ({
    type: Types.UPDATE_PASSWORD_SUCCESS
  }),

  updatePasswordFailed: (err) => ({
    type: Types.UPDATE_PASSWORD_FAILED,
    payload: { err }
  }),

}
