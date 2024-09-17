# Execute the single test from CMD
 npx cypress run --browser chrome --headed spec "specPath.js"

 # To use xpath in cypress we required plugin
 npm install -D cypress-xpath
 removed in Cypress version 13 +

 # Execude all Test Under marvin folder
 npx cypress run --spec 'cypress/e2e/Marvin/*'

 #Execute a specific type of test based on TAGS
 #only run the specs that have any tests tagged "@smoke"
$ npx cypress run --env grepTags=@smoke,grepFilterSpecs=true --spec "cypress/e2e/Marvin/*"

#run only tests that do not have any tags#and are not inside suites that have any tags$ 
npx cypress run --env grepUntagged=true

#that have "login" in their titles
$ npx cypress run --env grep=login,grepTags=smoke

#run test with allure reporter on
npx cypress run --env grepTags=@smoke --spec "cypress/e2e/Marvin/**.cy.js" --reporter mocha-allure-reporter

# Generate and open allure report
allure generate allure-results --clean -o allure-report
allure open

# Give Runtime Environment by this command line with browser in headed mode
npx cypress run --spec "cypress/e2e/Marvin/RuntimeURL.cy.js" --config baseUrl=https://docs.cypress.io/guides/overview/why-cypress --headed


 
