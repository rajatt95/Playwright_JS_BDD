/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

// Initializing the object (loginPage) of class (LoginPage)
const loginPage = new LoginPage()

Given('I visit a login page', async ()=> {
//defineStep('I visit a login page', async ()=> {
  await loginPage.navigateToLoginScreen()
})

When('I fill the login form with valid credentials', async ()=> {
//defineStep('I fill the login form with valid credentials', async ()=> {
  await loginPage.submitLoginForm()
})

//Then('I should see the home page', async ()=> {
defineStep('I should see the home page', async ()=> {
    await loginPage.assertUserIsLoggedIn()
})

defineStep('I wait for 3 seconds', async ()=> {
  await loginPage.pause()
})

// /^I fill the login form with "([^"]*)" and "([^"]*)"$/, -> This is regular expression
// Using this for execution the scenario with multiple set of data
defineStep(
  /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
  async (username, password)=> {
    await loginPage.submitLoginWithParameters(username, password)
  }
)
