import { api } from '../../config/ApiConfig';

export const Emails = {
  checkEmail: (email) => api.get(`/v1/owners/emails?email=${email}`)
}