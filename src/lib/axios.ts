import axios from 'axios'

import { env } from '@/src/config/env'

export const api = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 1000,
})
