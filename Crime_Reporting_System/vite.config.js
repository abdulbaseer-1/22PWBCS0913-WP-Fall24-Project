// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     https: true,
//   },
//   root: './frontend',
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    https: {
      key: './config/certificates/key.pem',
      cert: './config/certificates/cert.pem',
    },
  },
  root: './frontend',
  plugins: [react()],
});
