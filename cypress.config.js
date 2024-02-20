const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm',
    projectId: 'itqrow',
    screenshotOnRunFailure: false,
    screenshots :true,
    trashAssetsBeforeRuns: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 10000

  },
    
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 2
  }
});
