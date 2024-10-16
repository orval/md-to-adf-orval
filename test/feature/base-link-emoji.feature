Feature: Conversion link and emoji markdown


  Scenario: Base formatting - Link in a paragraph
    Given the markdown in GITHUB is 'Test with paragraph and a link [TitleOfLink](urltogoto)'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and a link "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "urltogoto" } } ] }'

  Scenario: Base formatting - Links in a paragraph
    Given the markdown in GITHUB is 'Test with paragraph and a link [TitleOfLink](urltogoto) plus another [mylink](somewhere)'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and a link "}'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "urltogoto" } } ] }'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "mylink", "marks": [ { "type": "link", "attrs": { "href": "somewhere" } } ] }'

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
    And the ADF chunk at content path [ 0 ] contains '{ "type": "mention", "attrs": { "text": "@name", "id": "user-id", "accessLevel": "" } }'

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

  Scenario: Base formatting - Complex link
    Given the markdown in GITHUB the same than in the markdown file named 'complex-link'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    # And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with complex "}'
    # And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "https://example.com/wibble/bob/foo/123/Floop+Badger#FloopBadger-ABC-99:Bananas('Apples')" } } ] }'
    # And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "TitleOfLink", "marks": [ { "type": "link", "attrs": { "href": "https://example.com/wibble/bob/foo/123/Floop+Badger#FloopBadger-ABC-99%3ABananas%28%27Apples%27%29" } } ] }'

  Scenario: Base formatting - Image link
    Given the markdown in GITHUB is 'Test with paragraph and two image links ![Alt Text](images/photo.jpg) ![someuuid](/f5123db4-fcef-4468-a3ef-4fb422b7dffa)'
    When we translate it in ADF
    Then the ADF chunk at content path [ 0 ] has type 'paragraph'
    And the ADF chunk at content path [ 0 ] contains '{ "type": "text", "text": "Test with paragraph and two image links "}'
    And the ADF chunk at content path [ 0, 1 ] contains '{ "type": "media", "attrs": { "id": "images/photo.jpg", "type": "file", "alt": "Alt Text", "collection": "attachment" } }'
