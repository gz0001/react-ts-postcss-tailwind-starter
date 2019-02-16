import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import CONFIG from '../config/auth'

// ==============================================

export default class Ajax {
  source: CancelTokenSource

  constructor() {
    this.source = axios.CancelToken.source()
  }

  get = async (url: string, options?: AxiosRequestConfig) => {
    const config = {
      ...options,
      url,
      auth: CONFIG.auth,
      cancelToken: this.source.token,
      method: 'get',
      withCredentials: true
    }
    try {
      const response = await axios(config)
      return response.data
    } catch (error) {
      return false
    }
  }

  post = async (url: string, options?: AxiosRequestConfig) => {
    const config = {
      ...options,
      url,
      auth: CONFIG.auth,
      cancelToken: this.source.token,
      method: 'post',
      withCredentials: true
    }
    try {
      const response = await axios(config)
      return response.data
    } catch (error) {
      return false
    }
  }

  patch = async (url: string, options?: AxiosRequestConfig) => {
    const config = {
      ...options,
      url,
      auth: CONFIG.auth,
      cancelToken: this.source.token,
      method: 'patch',
      withCredentials: true
    }
    try {
      const response = await axios(config)
      return response.data
    } catch (error) {
      return false
    }
  }

  delete = async (url: string, options?: AxiosRequestConfig) => {
    const config = {
      ...options,
      url,
      auth: CONFIG.auth,
      cancelToken: this.source.token,
      method: 'delete',
      withCredentials: true
    }
    try {
      const response = await axios(config)
      return response.data
    } catch (error) {
      return false
    }
  }

  put = async (url: string, options?: AxiosRequestConfig) => {
    const config = {
      ...options,
      url,
      auth: CONFIG.auth,
      cancelToken: this.source.token,
      method: 'put',
      withCredentials: true
    }
    try {
      const response = await axios(config)
      return response.data
    } catch (error) {
      return false
    }
  }

  cancel = () => {
    this.source.cancel()
  }
}
