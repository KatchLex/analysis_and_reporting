Feature: Access to other sites

  Scenario: I should be able too access bash.im
    Given I open "http://bash.im/" url
    Then Page title should be "Цитатник Рунета"

  Scenario: I should be able to access github
    Given I open "https://github.com/" url
    Then Page title should be "GitHub"  