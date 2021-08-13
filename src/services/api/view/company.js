import { api } from '../../../config/ApiConfig';

export const Company = {

  show: (slug) => api.get(`/v1/restaurants/${slug}?included=sections`),
  
  showById: (companyId) => api.get(`/v1/restaurants/${companyId}?by_id=true`)
}