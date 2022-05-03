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

// This is done to do the mapping for Assertions, Hooks and Step Definition files 
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-defitions/**/*.step.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}

