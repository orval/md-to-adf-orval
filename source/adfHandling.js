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

// /**
//  * @typedef { import("./markdownParsing").IRElement } IRElement
//  * @typedef { import("./markdownHandling").IRTreeNode } IRTreeNode
//  */

/**
 * Browse the tree recursively to add each node to the ADF Document
 * 	It also treat special cases between top-level node and generic ones
 *
 * @param currentParentNode					{Document}		ADF document to add to
 * @param currentArrayOfNodesOfSameIndent	{IRTreeNode}
 */
function fillADFNodesWithMarkdown( currentParentNode, currentArrayOfNodesOfSameIndent ){
	currentArrayOfNodesOfSameIndent.reduce( ( lastListNode, currentNode ) => {
		const nodeOrListNode = lastListNode !== null
							   && ( currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' )
							   && lastListNode.content.type === currentNode.node.adfType
							   ? lastListNode
							   : addTypeToNode( currentParentNode, currentNode.node.adfType, currentNode.node.typeParam )
		
		const nodeOrListItem = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList'
							   ? nodeOrListNode.content.push(li())
							   : nodeOrListNode
		const nodeToAttachTextTo = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' || currentNode.node.adfType === 'blockQuote'
								   ? typeof currentNode.node.textToEmphasis !== 'undefined' || currentNode.children.length === 0
									 ? nodeOrListItem.content.push(p())
									 : nodeOrListItem
								   : nodeOrListItem
		
		if( currentNode.node.adfType === 'divider' )
			return lastListNode
		
		else if( currentNode.node.adfType !== 'codeBlock'
				 && currentNode.node.textToEmphasis )
			attachItemNode( nodeToAttachTextTo, currentNode.node.textToEmphasis )
		
		else if( currentNode.node.adfType !== 'codeBlock'
				 && currentNode.node.textToEmphasis === '' )
			attachItemNode( nodeToAttachTextTo, ' ' )
		
		else if( currentNode.node.adfType === 'codeBlock' )
			attachTextToNodeRaw( nodeToAttachTextTo, currentNode.node.textToEmphasis )

		else if( currentNode.node.adfType === 'table' ) {
			const rows = currentNode.node.rows.map(r => {
				let cells
				if (r.node.adfType === 'tableHeader') {
					cells = r.node.cells.map(c => {
						let x = th({})(p(text(c.node.value.node.textToEmphasis)))
						return x
					})
				} else if (r.node.adfType === 'tableRow') {
					cells = r.node.cells.map(c => {
						let y = td({})(p(text(c.node.value.node.textToEmphasis)))
						return y
					})
				}
				return tr(cells)
			})
			const tab = table(...rows)
			tab.attrs = {}
			currentParentNode[currentParentNode.length - 1] = tab;
		}

		if( currentNode.children )
			fillADFNodesWithMarkdown( nodeOrListItem, currentNode.children )
		
		return ( currentNode.node.adfType !== 'orderedList' && currentNode.node.adfType !== 'bulletList' )
			   || ( !lastListNode || currentNode.node.adfType === lastListNode.content.type )
			   ? nodeOrListNode
			   : lastListNode
	}, null )
}

/**
 *  Adding a Top-Level ADF element
 *
 * @param adfNodeToAttachTo	{Node}		ADF node to attach this element to
 * @param adfType			{String}	ADF Type of the element we want to attach
 * @param typeParams		{String}	extra params for special top-level nodes
 *
 * @returns 				{Node}		the node added
 */
function addTypeToNode( adfNodeToAttachTo, adfType, typeParams ){
	switch( adfType ) {
		case "heading":
			adfNodeToAttachTo.push(heading({ level: typeParams })())
			break
		
		case "divider":
			adfNodeToAttachTo.push(rule())
			break
		
		case "bulletList":
			adfNodeToAttachTo.push(ul())
			break
		
		case "orderedList":
			if (typeParams)
				adfNodeToAttachTo.push(ol({ order: typeParams })())
			else
				adfNodeToAttachTo.push(ol()())
			break
		
		case "codeBlock":
			adfNodeToAttachTo.push(codeBlock({ typeParams })())
			break
		
		case "blockQuote":
			adfNodeToAttachTo.push(blockQuote())
			break
		
		case "paragraph":
			adfNodeToAttachTo.push(p())
			break
		
		case "table":
			adfNodeToAttachTo.push(table())
			break

		case "tableHeader":
			adfNodeToAttachTo.push(th())
			break

		case "tableRow":
			adfNodeToAttachTo.push(tr())
			break

		case "tableCell":
				adfNodeToAttachTo.push(td())
			break

		default:
			throw 'incompatible type'
	}

	return adfNodeToAttachTo
}

/**
 * Adding a non-top-level ADF node
 *
 * @param nodeToAttachTo		{Node}		ADF Node to attach to
 * @param rawText				{String}	text content of the node to add
 */
function attachItemNode( nodeToAttachTo, rawText ) {
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
	
	for( const currentSlice of slicedInlineAndEmojiAndLink ) {
		const last = nodeToAttachTo.at(-1)

		switch( currentSlice.type ){
			case 'inline':
				last.content.push(code(textToAttach))
				break
			
			case 'emoji':
				last.content.push(emoji({ shortName: currentSlice.text }))
				break
			
			case 'link':
				const linkFn = (currentSlice.optionalText2)
					? link({ href: currentSlice.optionalText1, title: currentSlice.optionalText2 })
					: link({ href: currentSlice.optionalText1 })

				last.content.push(linkFn(text(currentSlice.text)))
				break
			
			case 'mention':
				last.content.push(mention({ id: currentSlice.optionalText1, text: currentSlice.text}))
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
				last.content.push(mediaSingle({ href: currentSlice.optionalText1 }))
				break
			
			default:
				attachTextToNodeSliceEmphasis( last, currentSlice.text )
		}
	}
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

module.exports = fillADFNodesWithMarkdown
