export const Types = {

  SEND_SUGGESTION_REQUEST: '@view-suggestion/SEND_SUGGESTION_REQUEST',
  SEND_SUGGESTION_SUCCESS: '@view-suggestion/SEND_SUGGESTION_SUCCESS',
  SEND_SUGGESTION_FAILED: '@view-suggestion/SEND_SUGGESTION_FAILED'
}

export const Actions = {

  sendSuggestionRequest: (suggestion, screen) => ({
    type: Types.SEND_SUGGESTION_REQUEST,
    payload: { suggestion, screen }
  }),

  sendSuggestionSuccess: () => ({
    type: Types.SEND_SUGGESTION_SUCCESS
  }),

  sendSuggestionFailed: (err) => ({
    type: Types.SEND_SUGGESTION_FAILED,
    payload: { err }
  }),
  
}
