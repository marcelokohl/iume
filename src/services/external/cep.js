import axios from 'axios';

const api_url = axios.create({ baseURL: 'https://viacep.com.br/ws' })

export const GetAddressByCep = {
  get: (cep) => api_url.get(`/${cep}/json`)
}
