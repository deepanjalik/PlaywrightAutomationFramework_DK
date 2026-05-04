//Author : deepanjali

Feature: Login Functionality

    Scenario Outline: Login Functionality for Orange HRM application

        Given login to the application
        When Enter the "<username>" and "<password>"
        Then Click on login button
        Then Click on  PIM menu in the left navigation
        Then Enter "<employeefull name>"
        Then Enter "<EmployeeId>"
        Then click on save button


        Examples:

            | username | password | employeefull name | EmployeeId |
            | Admin    | admin123 | James Rose        | 12345      |