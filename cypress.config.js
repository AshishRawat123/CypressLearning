const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    video: true,  // Enable video recording
    setupNodeEvents(on, config) {
      // Customize to run browser in Incognito mode
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito');  // Launches Chrome in incognito mode
        }
        return launchOptions;
      });
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);

      // Video on Failure mechanism
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      });

      return config;
    },
    "experimentalStudio": true
  },
});
