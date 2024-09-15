Feature: Conversion of table markdown

  Scenario: Base formatting - Table
    Given the markdown in GITHUB the same than in the markdown file named 'simple-table'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'table'
    And the ADF document content has all the object defined in json file named 'simple-table'

  Scenario: Base formatting - Table plus
    Given the markdown in GITHUB the same than in the markdown file named 'table-plus'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'heading'
    Then the ADF chunk at content path [ 1 ] has type 'paragraph'
    Then the ADF chunk at content path [ 2 ] has type 'table'
    Then the ADF chunk at content path [ 3 ] has type 'paragraph'
