export const token = 'fake-token'

export const requestLoginPayload = {
  payload: {
    email: 'email@gmail.com',
    password: '12345678' 
  }
}
  
export const requestLoginPayloadNormalized = {
  "login": { 
    "email": 'email@gmail.com', 
    "password": '12345678' 
  }
}

export const loginResponse = {
  data: { token }
}

export const companiesResponse = {
  data: {
    data: [
      {
        "id": "gC1Zu9JkYC",
        "type": "restaurants",
        "attributes": {
          "name": "Churras Point",
          "slug": "churras-point",
          "active": true
        }
      }
    ]
  } 
}