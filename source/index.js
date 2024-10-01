/***********************************************************************************************************************
 *
 * Take any markdown (Github focussed for now) and translate it into a JIRA/Confluence compatible ADF document
 *
 *  @author bruno.morel@b-yond.com
 *
 **********************************************************************************************************************/
const { doc } = require('@atlaskit/adf-utils/builders')


const buildIRTreeFromMarkdown = require( __dirname + '/markdownHandling' )
const fillADFNodesWithMarkdown = require( __dirname + '/adfHandling' )

function translateGITHUBMarkdownToADF( markdownText ){
	
	const textTree = buildIRTreeFromMarkdown( markdownText )
	
	const content = []
	if( textTree.length > 0 )
		fillADFNodesWithMarkdown( content, textTree )

	const adfRoot = doc(...content)
	
	return adfRoot
}

module.exports = translateGITHUBMarkdownToADF
