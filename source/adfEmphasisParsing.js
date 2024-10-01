/***********************************************************************************************************************
 *
 * Atlassian Document Format parsing of Emphasis
 *
 *  @author bruno.morel@b-yond.com
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * This transform a text with emphasis mark (*, _ or `) into an ADF expanded Paragraph
 *
 **********************************************************************************************************************/
const { em, strike, strong, text } = require('@atlaskit/adf-utils/builders')


/**
 * Parse a string character per character to find emphasis patterns
 *  This is a very "manual" way to do it, but it provides the most efficient result
 * @param textToEmphasis		{String}	text to parse for emphasis parsing
 */
function attachTextToNodeSliceEmphasis( textToEmphasis ){
	const elements = []
	const lineUnderscored = textToEmphasis.replace( /\*/g, '_' )
	let currentDecorationLevel = 0
	//see convertDecorationLevelToMark
	// 0 => no decoration
	// 1 => italic
	// 2 => bold
	// 3 => bold and italic
	
	let potentialUnderscorePair = false
	let strikedThrough			= false
	let expressionBuffer		= ''
	for( const currentCharacterIndex in lineUnderscored ){
		
		if( lineUnderscored[ currentCharacterIndex ] !== '_' ){
			expressionBuffer += lineUnderscored[ currentCharacterIndex ]
			
			if( potentialUnderscorePair ){
				currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 2
										 ? currentDecorationLevel + 1
										 : currentDecorationLevel - 1
				potentialUnderscorePair = false
			}
		}
		
		if( currentCharacterIndex > 0
			&& lineUnderscored[ currentCharacterIndex ] === '~'
			&& lineUnderscored[ currentCharacterIndex - 1 ] === '~' ){
      const text = expressionBuffer.slice( 0, expressionBuffer.length - 2);
      if (text.length > 0) {
				elements.push(decorateText(text, currentDecorationLevel, strikedThrough))
      }

      expressionBuffer = ''
      strikedThrough = !strikedThrough
    }


    if( lineUnderscored[ currentCharacterIndex ] === '_' ){
			if( expressionBuffer !== '' ){
				elements.push(decorateText(expressionBuffer, currentDecorationLevel, strikedThrough))
			}
			else {
				if( potentialUnderscorePair )
					currentDecorationLevel = currentDecorationLevel === 0 || currentDecorationLevel === 1
											 ? currentDecorationLevel + 2
											 : currentDecorationLevel - 2
			}
			
			potentialUnderscorePair = !potentialUnderscorePair
			expressionBuffer = ''
		}
	}
	
	if( expressionBuffer !== '' ){
		elements.push(decorateText(expressionBuffer, currentDecorationLevel, strikedThrough))
	}

	return elements
}

/**
 * Convert a "decoration level" (bit swap) to an actual ADF Mark for the text
 *
 * @param textContent		{String}	text to parse for emphasis parsing
 * @param decorationLevelToConvert	{Number}		decoration level follow the convention:
 * 														0 => no decoration
 * 														1 => italic
 * 														2 => bold
 * 														3 => bold and italic
 * @param addStrikethrough			{Boolean}		is strikethrough active?
 */
function decorateText(textContent, decorationLevelToConvert, addStrikethrough) {
	if (addStrikethrough)
		return decorationLevelToConvert === 1
		? em(strike(textContent))
		: decorationLevelToConvert === 2
			? strong(strike(textContent))
			: decorationLevelToConvert === 3
				? em(strong(strike(textContent)))
				: strike(textContent)

  return decorationLevelToConvert === 1
    ? em(textContent)
    : decorationLevelToConvert === 2
      ? strong(textContent)
      : decorationLevelToConvert === 3
        ? em(strong(textContent))
        : text(textContent)
}

module.exports = attachTextToNodeSliceEmphasis
