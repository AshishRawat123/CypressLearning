const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  // baseUrl: 'https://www.saucedemo.com',
  // chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // this.baseUrl = 'https://www.saucedemo.com'
    },
  },
});
