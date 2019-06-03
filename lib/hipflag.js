import axios from 'axios'

class Hipflag {
  constructor(options) {
    this.apiClient = axios.create({
      baseURL: 'https://api.hipflag.com/v1/',
      timeout: 15000,
      headers: {
        'X-Auth-Public': options.publicKey,
        'Content-Type': 'application/json'
      }
    })
  }

  getFlag(name, userId = null) {
    const params = userId ? { user_id: userId } : {}

    return this.apiClient.get(`flags/${name}`, {
      params: params,
      transformResponse: axios.defaults.transformResponse.concat((res) => res.flag)
    })
  }
}

export default Hipflag
