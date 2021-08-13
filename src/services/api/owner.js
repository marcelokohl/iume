import { api } from '../../config/ApiConfig';

export const Owner = {
  getCurrentOwner: () => api.get('/v1/owners/me'),

  create: (data) => api.post('/v1/owners', data),

  destroy: () => api.delete('/v1/owners/me'),

  update: (data) => api.put('/v1/owners/me', data),

  sendEmailToRecoverPassword: (data) => api.post('/v1/recover_password/owner', data),

  recoverPassword: (data, headers) => api.put('/v1/recover_password/owner/me', data, headers),
}