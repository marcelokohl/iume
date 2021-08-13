import { api } from '../../config/ApiConfig';

export const Auth = {
  login: (data) => api.post('/v1/owners/sessions', data),

  logout: () => api.delete('/v1/owners/sessions/me')
}