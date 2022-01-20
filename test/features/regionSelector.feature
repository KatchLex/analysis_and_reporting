@all
Feature: Region Selection

  @westdigital
  Scenario: Verify user can open menu
    Given I open "https://www.westerndigital.com/" url
    When I wait until "Dropdown" is present
    Then Text of "Dropdown" should contain "Europe"
    And I wait until "Accept Cookies" is visible
    Then I click "Accept Cookies"
    And I click "Continue"
    And I wait "5" seconds
    And Page title should not be "Hard Drives, USB Drives, and Memory Cards | Western Digital"
