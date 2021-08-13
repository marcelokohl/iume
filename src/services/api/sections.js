import { api } from '../../config/ApiConfig';

export const Section = {
  create: (companyId, data) => api.post(`/v1/owners/restaurants/${companyId}/sections`, data),

  update: (companyId, sectionId, data) => api.put(`/v1/owners/restaurants/${companyId}/sections/${sectionId}`, data),

  delete: (companyId, sectionId) => api.delete(`/v1/owners/restaurants/${companyId}/sections/${sectionId}`),

  sort: (companyId, data) => api.put(`/v1/owners/restaurants/${companyId}/sections/sort`, data),

  all: (companyId) => api.get(`/v1/owners/restaurants/${companyId}/sections`)
}