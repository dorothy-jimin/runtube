import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'html5/runtube/', // 쉼표 추가
  plugins: [react()],
})
