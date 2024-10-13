/***********************************************************************************************************************
 *
 * Atlassian Document Format Handling
 *
 *  @author bruno.morel@b-yond.com
 * ---------------------------------------------------------------------------------------------------------------------
 *
 * This transform a Intermediate Representation Tree (see markdownHandling) into the equivalent ADF nodes.
 * It also remove non-compatible hierarchy that ADF doesn't support
 *
 **********************************************************************************************************************/
const { blockQuote, code, codeBlock, emoji, heading, li, link, mediaSingle, mention, ol, p, rule, table, td, text, th, tr, ul } = require('@atlaskit/adf-utils/builders')

const marked = require('marked')

const attachTextToNodeSliceEmphasis = require( __dirname + '/adfEmphasisParsing' )

function treeToADF(tree) {
	const elements = []
	for (let i = 0; i < tree.length; i++) {
		const node = tree[i].node
		const children = tree[i].children
		const tSlices = node?.textToEmphasis !== undefined ? textSlices(node.textToEmphasis) : undefined
		let list

		switch (node.adfType) {
			case 'heading':
				elements.push(heading({ level: node.typeParam })(...tSlices))
				break

			case 'paragraph':
				node.textToEmphasis = node.textToEmphasis === '' ? ' ' : node.textToEmphasis
				elements.push(p(...textSlices(node.textToEmphasis)))
				break

			case 'divider':
				elements.push(rule())
				break

			case 'bulletList':
				({ list, i } = processList('bulletList', tSlices, children, i))
				elements.push(ul(...list))
				break

			case 'orderedList':
				({ list, i } = processList('orderedList', tSlices, children, i))
				if (node.typeParams)
					elements.push(ol({ order: node.typeParams })(...list))
				else
					elements.push(ol()(...list))
				break

			case 'blockQuote':
				elements.push(blockQuote(p(...tSlices)))
				break

			case 'table':
				const rows = node.rows.map(r => {
					let cells
					if (r.node.adfType === 'tableHeader') {
						cells = r.node.cells.map(c => {
							let x = th({})(p(...textSlices(c.node.value.node.textToEmphasis)))
							return x
						})
					} else if (r.node.adfType === 'tableRow') {
						cells = r.node.cells.map(c => {
							let y = td({})(p(...textSlices(c.node.value.node.textToEmphasis)))
							return y
						})
					}
					return tr(cells)
				})
				elements.push(table(...rows))
				break

			case 'codeBlock':
				elements.push(codeBlock({ attrs: node.typeParams })(text(node.textToEmphasis)))
				break

			default:
				console.log('incompatible type', node.adfType)
				throw 'incompatible type'
		}
	}
	return elements

	function processList(adfType, tSlices, children, i) {
		const items = [p(...tSlices)]

		if (children?.length) {
			items.push(...treeToADF(children))
		}

		const list = [li(items)]
		for (let j = i + 1; j < tree.length; j++) {
			const moreChildren = tree[j].children
			if (tree[j].node.adfType === adfType) {
				const moreItems = [p(...textSlices(tree[j].node.textToEmphasis))]
				if (moreChildren?.length) {
					moreItems.push(...treeToADF(moreChildren))
				}
				list.push(li(moreItems))
				i++
			}
		}
		return { list, i }
	}
}

/**
 * Adding a non-top-level ADF node
 *
 * @param rawText				{String}	text content of the node to add
 */
function textSlices(rawText) {
	if (rawText === '') return [text(' ')]

	const slicedInline = sliceInLineCode( rawText )
	
	const { slicedInlineAndEmoji } = slicedInline.reduce( ( { slicedInlineAndEmoji }, currentSlice ) => {
		if( !currentSlice.isMatching ){
			const slicedEmoji = sliceEmoji( currentSlice.text )
			
			return { slicedInlineAndEmoji: slicedInlineAndEmoji.concat( slicedEmoji ) }
		}
		
		slicedInlineAndEmoji.push( currentSlice )
		return { slicedInlineAndEmoji }
	}, { slicedInlineAndEmoji: [] } )
	
	const { slicedInlineAndEmojiAndLink } = slicedInlineAndEmoji.reduce( ( { slicedInlineAndEmojiAndLink }, currentSlice ) => {
		if( !currentSlice.isMatching ){
			const slicedLink = sliceLink( currentSlice.text )
			
			return { slicedInlineAndEmojiAndLink: slicedInlineAndEmojiAndLink.concat( slicedLink ) }
		}
		
		slicedInlineAndEmojiAndLink.push( currentSlice )
		return { slicedInlineAndEmojiAndLink }
	}, { slicedInlineAndEmojiAndLink: [] } )

	const elements = []
	for( const currentSlice of slicedInlineAndEmojiAndLink ) {
		switch( currentSlice.type ){
			case 'inline':
				elements.push(code(currentSlice.text))
				break
			
			case 'emoji':
				elements.push(emoji({ shortName: currentSlice.text }))
				break
			
			case 'link':
				const linkFn = (currentSlice.optionalText2)
					? link({ href: currentSlice.optionalText1, title: currentSlice.optionalText2 })
					: link({ href: currentSlice.optionalText1 })

				elements.push(linkFn(text(currentSlice.text)))
				break
			
			case 'mention':
				elements.push(mention({ id: currentSlice.optionalText1, text: currentSlice.text}))
				break
			
			case 'image':
				// const imageNode = new Text( currentSlice.text,
				// 							marks().link( currentSlice.optionalText1,
				// 										  currentSlice.optionalText2 ) )
				// nodeToAttachTo.content.add( imageNode )
				// const linkFn = (currentSlice.optionalText2)
				// 	? link({ href: currentSlice.optionalText1, title: currentSlice.optionalText2 })
				// 	: link({ href: currentSlice.optionalText1 })

				// last.content.push(linkFn(text(currentSlice.text)))
				elements.push(mediaSingle({ href: currentSlice.optionalText1 }))
				break
			
			default:
				elements.push(...attachTextToNodeSliceEmphasis( currentSlice.text ))
		}
	}
	return elements
}

/**
 * Match text content with and ADF inline type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching an inline style
 */
function sliceInLineCode( rawText ){
	return sliceOneMatchFromRegexp( rawText, 'inline', /(?<nonMatchBefore>[^`]*)(?:`(?<match>[^`]+)`)(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and ADF emoji type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching an emoji style
 */
function sliceEmoji( rawText ){
	return sliceOneMatchFromRegexp( rawText, 'emoji',/(?<nonMatchBefore>[^`]*)(?::(?<match>[a-zA-Z0-9_\+]+):)(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and ADF link type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching a link style
 */
function sliceLink( rawText ){
	const linkSlices = [];
	const walkTokens = (token) => {
		if (token.type === 'link') {
			const typeTag = token.text[0] === "@" ? 'mention' : 'link';
			linkSlices.push({
				isMatching: true,
				type: typeTag,
				text: token.text,
				optionalText1: token.href,
				optionalText2: token.title,
				raw: token.raw
			})
		} 
	};

	// use marked to parse out just links
	marked.parse(rawText, { walkTokens });

	// this is crazy but pull the links out of the rawText to make the text slices
	const slices = []
	let paragraph = rawText

	linkSlices.forEach(l => {
		const link = l.raw
		const linkIdx = rawText.indexOf(link)

		if (linkIdx !== -1) {
			const textBefore = paragraph.substring(0, linkIdx)

			if (textBefore.length > 0) {
				slices.push({
					isMatching: false,
					text: textBefore
				})
			}
			slices.push(l)

			// set paragraph to the remaining text
			paragraph = paragraph.substring(linkIdx + link.length)
		}
	})

	if (paragraph.length > 0) {
		slices.push({
			isMatching: false,
			text: paragraph
		})
	}

	return slices
}

/**
 * Match text content with and regular expression with one match
 *
 * @param rawText				{String}	the text content to try to match
 * @param typeTag				{String}	the ADF Type to return if it matches
 * @param regexpToSliceWith		{RegExp}	the regexp with a match group and a non-match group to use
 *
 * @returns 					{String[]}	the different slice matching the specified regexp
 */
function sliceOneMatchFromRegexp( rawText, typeTag, regexpToSliceWith ){
  let slicesResult = [ ]
  let snippet = null
  let hasAtLeastOneExpression = false

  while( ( snippet = regexpToSliceWith.exec( rawText ) ) ) {
    hasAtLeastOneExpression = true
    if( snippet.groups.nonMatchBefore ){
      slicesResult.push( { isMatching: false, text: snippet.groups.nonMatchBefore } )
    }

    if( snippet.groups.match ){
      slicesResult.push( {
        isMatching: 		true,
        type: 			typeTag,
        text: 			snippet.groups.match,
        optionalText1: 	snippet.groups.matchOptional,
        optionalText2: 	snippet.groups.matchOptional2
      } )
    }

    if( snippet.groups.nonMatchAfter ){
      slicesResult.push( { isMatching: false, text: snippet.groups.nonMatchAfter } )
    }
  }

  if( !hasAtLeastOneExpression )
    slicesResult.push( { isMatching: false, text: rawText } )

  return slicesResult
}

/**
 * Attach a raw simple text node to the parent
 *
 * @param nodeToAttachTo	{Node}		ADF node to attach to
 * @param textToAttach		{String}	text to use for the Text node
 */
function attachTextToNodeRaw( nodeToAttachTo, textToAttach ){
	nodeToAttachTo.push(text(textToAttach))
}

module.exports = treeToADF
