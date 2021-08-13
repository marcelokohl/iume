import { api } from '../../../config/ApiConfig';

export const Product = {

  bySection: (sectionId) => api.get(`/v1/restaurants/sections/${sectionId}/products`),

}