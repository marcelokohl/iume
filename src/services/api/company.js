import { api } from '../../config/ApiConfig';

export const Company = {
  create: (data) => api.post('/v1/owners/restaurants', data),

  update: (companyId, data) => api.put(`/v1/owners/restaurants/${companyId}`, data),

  show: (companyId, included = null) => api.get(`/v1/owners/restaurants/${companyId}${included ? '?included='+included : ''}`),

  all: () => api.get('/v1/owners/restaurants'),

  checkSlugAvailability: (data) => api.put('/v1/owners/restaurants/availability_slug', data)
}