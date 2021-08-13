import { api } from '../../config/ApiConfig';

export const Product = {
  create: (sectionId, data) => api.post(`/v1/owners/restaurants/sections/${sectionId}/products`, data),

  update: (sectionId, productId, data) => api.put(`/v1/owners/restaurants/sections/${sectionId}/products/${productId}`, data),

  delete: (sectionId, productId) => api.delete(`/v1/owners/restaurants/sections/${sectionId}/products/${productId}`),

  bySection: (sectionId) => api.get(`/v1/owners/restaurants/sections/${sectionId}/products`),

  sortProducts: (sectionId, data) => api.put(`/v1/owners/restaurants/sections/${sectionId}/products/sort`, data)
}