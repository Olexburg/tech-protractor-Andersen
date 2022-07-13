Feature: Test Andersen

Scenario: The user can see the text 'Software Development Company' on Andersen site
    Given I have got opened Google search page 
    When I text Andersenlab to search input
    And I click on the Submit button
    Then I should be on the page with search results
    When I click on the Andersen Lab link
    Then I should be redirected to Andersen site
    And I verify main page contains the text Software Development Company 
