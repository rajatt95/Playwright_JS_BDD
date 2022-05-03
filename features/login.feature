# /**************************************************/

# /**  
# * @author Rajat Verma
# * https://www.linkedin.com/in/rajat-v-3b0685128/
# * https://github.com/rajatt95
# * https://rajatt95.github.io/ 
# *  
# * Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
# * Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
# */

# /**************************************************/

Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
      Given I visit a login page
      When I fill the login form with valid credentials
      Then I should see the home page

    # Multiple set of Data
    Scenario Outline: Try to login with invalid credentials
      Given I visit a login page
      When I fill the login form with "<username>" and "<password>"
      Then I wait for 3 seconds

      Examples:
          | username | password |
          | fail-1  | fail-1  |
          | fail-2  | fail-2  |
          | fail-3  | fail-3  |