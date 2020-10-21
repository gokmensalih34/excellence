@wip
Feature: Excellence Page

  Background:
    Given the user access HomePage

  Scenario: User can access Excellence HomePage
    Then the page title is "Excellence AG | German Engineerings"

  Scenario: User can see the Tabs
    Then the tabs like following
      | ABOUT        |
      | PEOPLE       |
      | MANAGEMENT   |
      | PRESS/EVENTS |
      | CONTACT      |
      | CAREER       |
      | JOBS         |





