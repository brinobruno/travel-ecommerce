import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import react from '@vitejs/plugin-react'
import { afterEach } from 'vitest'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})

afterEach(() => {
  cleanup()
})
