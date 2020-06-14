const axios = require('axios').default

const base = axios.create({
  baseURL: process.env.BASE_URL_COVID
})

const getByCountry = async country => base.get(`${country}`)
  .then(response => response.data)
  .catch(error => error.response.data)

module.exports = {
  getByCountry
}
