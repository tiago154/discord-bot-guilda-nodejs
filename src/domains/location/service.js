const axios = require('axios').default

const base = axios.create({
  baseURL: process.env.BASE_URL_LOCATION
})

const getByCEP = async cep => base.get(`${cep}`)
  .then(response => response.data)
  .catch(error => error.response.data)

module.exports = {
  getByCEP
}
