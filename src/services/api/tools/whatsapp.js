import { api } from '../../../config/ApiConfig';

export const Whatsapp = {
  update: (companyId, data) => api.put(`/v1/owners/restaurants/${companyId}/tools/whatsapp`, data)
}