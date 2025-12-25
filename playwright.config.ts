import { defineConfig, devices } from '@playwright/test';

const desktopChrome = { ...devices['Desktop Chrome'] }

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: '.',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:3000/ja/blog/',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'pages:Desktop Chrome',
      testDir: 'pages',
      use: desktopChrome,
    },
    {
      name: 'e2e:Desktop Chrome',
      testDir: 'test/e2e',
      use: desktopChrome,
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000/ja/blog/',
    reuseExistingServer: !process.env.CI,
  },
});