/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="cypress" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    checker({ typescript: true }),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/SetupTest.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true, // or 'istanbul'
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: ['src/main.tsx'],
    },
  },
  envDir: './',
});
