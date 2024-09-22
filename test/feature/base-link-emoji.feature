Feature: Conversion link and emoji markdown


  Scenario: Base formatting - Link in a paragraph
    Given the markdown in GITHUB is 'Test with paragraph and a link [TitleOfLink](urltogoto)'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and a link "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "urltogoto" } } ] }'

  Scenario: Base formatting - Empty link
    Given the markdown in GITHUB is 'Test with paragraph and an empty link [Empty]()'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and an empty link "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Empty", "marks": [ { "type": "link", "attrs": { "href": "" } } ] }'

  Scenario: Base formatting - Mention in a paragraph
    Given the markdown in GITHUB is 'Test with paragraph and a mention [@name](user-id)'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and a mention "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "mention", "attrs": { "text": "@name", "id": "user-id" } }'

  Scenario: Base formatting - Link in a paragraph with a title
    Given the markdown in GITHUB is 'Test with paragraph and a link [TitleOfLink](urltogoto "mytitle")'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and a link "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "urltogoto", "title": "mytitle" } } ] }'


  Scenario: Base formatting - Emoji in a paragraph
    Given the markdown in GITHUB is 'Test with paragraph and an :smile: emoji'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and an "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "emoji", "attrs": { "shortName": "smile" } }'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": " emoji"}'
