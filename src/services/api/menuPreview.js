import { api } from '../../config/ApiConfig';

export const MenuPreview = {

  getRestaurant: (slug) => api.get(`/v1/restaurants/${slug}?preview=true`),
  
  getProductsBySection: (sectionId) => api.get(`/v1/restaurants/sections/${sectionId}/products?preview=true`),

}