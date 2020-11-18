import axios from 'axios'
import Cookie from 'js-cookie'
import { SPOTFY_AUTH_URL } from '../constants/services'

const spotifyInstance = axios.create({
  baseURL: process.env.API_SPOTIFY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const reqSuccess = (config) => {
  const token = Cookie.get('userToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

const reqFail = (err) => console.log(err)

spotifyInstance.interceptors.request.use(reqSuccess, reqFail)
spotifyInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    Cookie.remove('userToken')
    err.response.status === 401 && window.location.replace(SPOTFY_AUTH_URL)
  }
)

export const getFeaturedPlaylists = (params) =>
  spotifyInstance.get('/browse/featured-playlists', { params })
