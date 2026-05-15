import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'http://127.0.0.1:6006',
    headless: true,
  },

  webServer: {
    command: 'npm run storybook',
    port: 6006,
    reuseExistingServer: true,
  },
});