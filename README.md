# Prerequisites
# Node.js: Ensure Node.js is installed. You can download it from Node.js official website.
# npm: Comes bundled with Node.js. Verify installation using npm -v.
# Cypress: Install Cypress globally or locally using npm.
npm install cypress

# install node modules
npm i
# Run all test
cypress run --browser chrome --spec "cypress/e2e/Learning/*.cy.js"
# run tests in the Cypress Test Runner GUI
npx cypress open
# execute tests in headless mode
npx cypress run
