@wip
Feature: Excellence Page A

  Background:
    Given the user access HomePage

  Scenario: User can access Excellence HomePage
    Then the page title is "Excellence AG | German Engineering"

  Scenario: Verify Tabs
    Then the tabs like following
      | ABOUT        |
      | PEOPLE       |
      | MANAGEMENT   |
      | PRESS/EVENTS |
      | CONTACT      |
      | CAREER       |
      | JOBS         |





