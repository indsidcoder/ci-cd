Feature: Example API request

  Scenario: Checking the status code of an API response
    When I make a GET request
    Then the response status should be 200