@all
Feature: Short sites overview

  @westdigital
  Scenario: Verify user can open region menu
    Given I open "https://www.westerndigital.com/" url
    When I wait until "Dropdown" is present
    Then Text of "Dropdown" should contain "Europe"
    And I wait until "Accept Cookies" is visible
    Then I click "Accept Cookies"
    And I click "Continue"
    And I wait "5" seconds
    And Page title should not be "Hard Drives, USB Drives, and Memory Cards | Western Digital"

  @handler
  Scenario: Verify user can check page title
    Given I open "https://www.handler.by/" url
    Then Page title should be "Мебельный сервис | Мебельная фурнитура | Сообщество специалистов и партнёров"
    And I click "Search icon"
    Then I wait "1" seconds
    And I type "фурнитура" text in "Search input"
    Then I wait "3" seconds
    And Count of "Search results" should be "20"
