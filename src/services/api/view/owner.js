import { api } from '../../../config/ApiConfig';

export const Owner = {

  sendSuggestion: (data) => api.post('/v1/owners/feedbacks', data)
  
}