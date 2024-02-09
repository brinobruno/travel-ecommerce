import axios from 'axios'

import { env } from '@/src/config/env'

export const api = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 1000,
})
