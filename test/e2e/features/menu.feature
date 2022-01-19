@all
Feature: Menu

  @epam
  Scenario: Verify user can open menu
    Given I open "https://www.epam.com/" url
    When I wait until "Menu" is present
    Then Text of "Menu" should contain "MENU"

    When I click "Menu"
      And I wait until "Expanded Menu" is present
    Then "Expanded Menu" should be visible
      And Count of "Expanded Menu Sublists" should not be "3"
      And Text of "Expanded Menu Row Titles" should contain "HOW WE DO IT"
      And Count of "Expanded Menu Row Titles" should be "6"
      And I wait "1" seconds