module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(503);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Strike = /** @class */ (function (_super) {
    __extends(Strike, _super);
    function Strike() {
        return _super.call(this, 'strike') || this;
    }
    return Strike;
}(mark_1.Mark));
exports.Strike = Strike;
//# sourceMappingURL=strike.js.map

/***/ }),

/***/ 135:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_1 = __webpack_require__(526);
var hard_break_1 = __webpack_require__(570);
var index_1 = __webpack_require__(492);
var mention_1 = __webpack_require__(962);
var text_1 = __webpack_require__(171);
var Decision = /** @class */ (function () {
    function Decision(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('decisionItem');
    }
    Decision.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Decision.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Decision.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Decision.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Decision.prototype.strike = function (text) {
        return this.add(text_1.strike(text));
    };
    Decision.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Decision.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Decision.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Decision.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Decision.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Decision.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    };
    return Decision;
}());
exports.Decision = Decision;
//# sourceMappingURL=decision.js.map

/***/ }),

/***/ 147:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_1 = __webpack_require__(526);
var hard_break_1 = __webpack_require__(570);
var index_1 = __webpack_require__(492);
var mention_1 = __webpack_require__(962);
var text_1 = __webpack_require__(171);
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('paragraph');
        return _this;
    }
    Paragraph.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Paragraph.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Paragraph.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Paragraph.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Paragraph.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Paragraph.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Paragraph.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Paragraph.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Paragraph.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Paragraph.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return Paragraph;
}(index_1.TopLevelNode));
exports.Paragraph = Paragraph;
//# sourceMappingURL=paragraph.js.map

/***/ }),

/***/ 171:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(812);
var index_2 = __webpack_require__(492);
function plain(text) {
    return new Text(text);
}
exports.plain = plain;
function strike(text) {
    return new Text(text, index_1.marks().strike());
}
exports.strike = strike;
function strong(text) {
    return new Text(text, index_1.marks().strong());
}
exports.strong = strong;
function em(text) {
    return new Text(text, index_1.marks().em());
}
exports.em = em;
function link(text, href, title) {
    return new Text(text, index_1.marks().link(href, title));
}
exports.link = link;
function code(text) {
    return new Text(text, index_1.marks().code());
}
exports.code = code;
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(text, marks) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.marks = marks;
        if (!text || text.length === 0) {
            throw new Error('Text must be at least one character long');
        }
        return _this;
    }
    Text.prototype.toJSON = function () {
        var textNode = {
            type: 'text',
            text: this.text,
        };
        if (this.marks) {
            textNode.marks = this.marks.toJSON();
        }
        return textNode;
    };
    return Text;
}(index_2.InlineNode));
exports.Text = Text;
//# sourceMappingURL=text.js.map

/***/ }),

/***/ 192:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong() {
        return _super.call(this, 'strong') || this;
    }
    return Strong;
}(mark_1.Mark));
exports.Strong = Strong;
//# sourceMappingURL=strong.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __unusedexports, __webpack_require__) {

/**********************************************************************************************************************
 *
 *  Markdown handling
 *
 *  @author bruno.morel@b-yond.com
 *---------------------------------------------------------------------------------------------------------------------
 *
 * This build an intermediate representation tree and manage the hierarchy and priorities of the markdown expressions
 *  each branch will contain an object with the follow properties:
 *
 **********************************************************************************************************************/
const translateMarkdownLineToIR = __webpack_require__( 572 )

/**
 * @typedef {Object}  IRTreeNode
 * @property {IRElement} 	node 			- intermediate representation of the markdown element
 * @property {IRElement[]} 	children 		- the list of children attach to that node
 * @property {Number} 		indexOfList 	- the index in the list of expression
 */


/**
 * Implement markdown greediness and collapsing of subnode, generate the final node tree representing
 *  the IRElement topology
 *
 * @param rawTextMarkdown	{String[]}		array of expression to parse and handle
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function buildTreeFromMarkdown( rawTextMarkdown ){
	//code block are the most greedy expression in markdown
	const cleanedCodeBlock = collapseCodeBloc( rawTextMarkdown )
	
	//block quote collapse paragraphs, so we have to to them first
	const blockquotedNodes = collapseBlockquote( cleanedCodeBlock )
	
	const tabledNodes = collapseTable( blockquotedNodes )

	//paragraph themselves collapse when they are not separated by
	// two consecutive empty lines
	const breakedLineNodes = collapseParagraph( tabledNodes )

	//lists accumulate elements of the same level unless separated by
	// 	two consecutive empty lines
	const accumulatedNodes = accumulateLevelFromList( breakedLineNodes )
	
	//we build the array of textPosition for each level
	const levelsPosition = createLevelList( accumulatedNodes )
	
	//map each element to a level, in order
	const elementMap = mapIRToLevels( accumulatedNodes, levelsPosition )
	
	return buildTreeFromLevelMap( elementMap )
}



/**
 * CodeBlock swallow all text until they are closed, so we collapsed all paragraph into them
 *   When a code block is open, it should be closed by a triple caret, everything in between is code
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseCodeBloc( rawIROfMarkdown ){
	///MARDKOWN logic - closing code blocks
	//
	const { codeBlockHandled } =  rawIROfMarkdown.split( /\r\n|\r|\n/ ).reduce( ( { codeBlockHandled, indexCurrentCodeBloc }, currentLine ) => {
		const lineTranslation = translateMarkdownLineToIR( currentLine )
		
		if( typeof indexCurrentCodeBloc === "undefined"
			&& ( lineTranslation.adfType === 'codeBlock'
				 || lineTranslation.nodeAttached ) ){
			codeBlockHandled.push( lineTranslation )
			if( lineTranslation.nodeAttached ){
				codeBlockHandled.push( lineTranslation.nodeAttached )
			}
			
			return { codeBlockHandled, indexCurrentCodeBloc: codeBlockHandled.length - 1 }
		}
		
		if( typeof indexCurrentCodeBloc !== "undefined"
			&& ( lineTranslation.adfType !== 'codeBlock'
				 || typeof lineTranslation.typeParam === "undefined"
				 || lineTranslation.typeParam !== '' ) ) {
			const textToAdd = lineTranslation.textPosition >= codeBlockHandled[ indexCurrentCodeBloc ].textPosition
							  ? currentLine.slice( codeBlockHandled[ indexCurrentCodeBloc ].textPosition )
							  : currentLine
			codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis = codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis
																	  + ( codeBlockHandled[ indexCurrentCodeBloc ].textToEmphasis === ''
																		  ? textToAdd
																		  : '\n' + textToAdd )
			return { codeBlockHandled, indexCurrentCodeBloc }
		}
		
		if( typeof indexCurrentCodeBloc !== "undefined"
			&& lineTranslation.adfType === 'codeBlock'
			&& typeof lineTranslation.typeParam !== "undefined"
			&& lineTranslation.typeParam === '' ){
			return { codeBlockHandled }
		}
		
		codeBlockHandled.push( lineTranslation )
		
		return { codeBlockHandled }
	}, { codeBlockHandled: [] } )
	
	//handling of unfinished empty codeBlock
	const cleanedCodeBlock = codeBlockHandled.filter( ( currentNode ) => {
		if( currentNode.adfType !== 'codeBlock' )
			return currentNode
		
		if( currentNode.textToEmphasis !== '' )
			return currentNode
	} )
	
	return cleanedCodeBlock
}

/**
 * Blockquote start with each line identify with a caret. Any interruption (line break) create a new blockquote
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseBlockquote( rawIROfMarkdown ){
	const { blockquotedNodes } = rawIROfMarkdown.reduce( ( { blockquotedNodes, currentLastThatWasBlockQuote }, currentLineNode ) => {
		
		if( !currentLastThatWasBlockQuote
			&& currentLineNode.adfType === 'blockQuote' ){
			blockquotedNodes.push( currentLineNode )
			return { blockquotedNodes, currentLastThatWasBlockQuote: currentLineNode }
		}
		
		//this is a non-empty paragraph, if we are already filling up a paragraph, let's add the text inside
		if( currentLastThatWasBlockQuote
			&& currentLineNode.adfType === 'blockQuote' ){
			currentLastThatWasBlockQuote.textToEmphasis = currentLastThatWasBlockQuote.textToEmphasis +
														  ' ' + currentLineNode.textToEmphasis
			return { blockquotedNodes, currentLastThatWasBlockQuote }
		}
		
		//this is non-blockquote node, we add it to the list
		blockquotedNodes.push( currentLineNode )
		return { blockquotedNodes }
		
	}, { blockquotedNodes: [ ] } )
	
	return blockquotedNodes
}

/**
 * Tables start with a pipe
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseTable( rawIROfMarkdown ){

	const TABLE_DELIM_RE = /^:{0,1}-+:{0,1}$/

	function getCells(str) {
			const cells = str.split('|')
			cells.shift()
			cells.pop()
			return cells.map(c => c.trim())
	}

	// return the number of columns if this is a table delimiter
	function checkTableDelimiterNode(node) {
		if (node.adfType === 'paragraph') {
			const cells = getCells(node.textToEmphasis)
			if (cells.every(c => TABLE_DELIM_RE.test(c))) {
				return cells.filter(c => TABLE_DELIM_RE.test(c))
			}
		}
		return 0
	}

	// return the cells if this is a table row
	function checkTableRowNode(node, numCols) {
		if (node.adfType === 'paragraph') {
			const cells = getCells(node.textToEmphasis)
			if (cells.length === numCols) {
				return cells
			}
		}
		return []
	}

	function makeCell( value ){
		return { node: { adfType: "tableCell", value: { node: {
			adfType: 'paragraph',
			textToEmphasis: value,
			textPosition: 0
		}}}}
	}

	const nodes = []

  for (let i = 0; i < rawIROfMarkdown.length;) {
		const delims = checkTableDelimiterNode(rawIROfMarkdown[i])

		if (i > 0 && delims.length > 0) {
			const headers = checkTableRowNode(rawIROfMarkdown[i - 1], delims.length)

			// non-zero headers means a table has been found
			if (headers.length > 0) {
				const headerCells = headers.map(h => makeCell(h))

				const headerRow = { node: { adfType: "tableHeader", cells: headerCells }}
				const table = {
					adfType: "table",
					textPosition: rawIROfMarkdown[i].textPosition,
					rows: [ headerRow ],
					typeParam: {
						isNumberColumnEnabled: false,
						layout: "center",
						width: 900,
						displayMode: "default"
					},
				}

				let j = i + 1

				for (; j < rawIROfMarkdown.length; ++j) {
					const cells = checkTableRowNode(rawIROfMarkdown[j], delims.length)

					if (cells.length == 0) break

					const row = { node: { adfType: "tableRow", cells: cells.map(c => makeCell(c)) }}
					table.rows.push(row)
				}

				// remove paragraph that was actually a table header
				nodes.pop()
				nodes.push(table)
				i = j
				continue
			}
		}

    nodes.push(rawIROfMarkdown[i])
		++i
  }

  return nodes
}

/**
 * Heading is an exception, otherwise non-empty line aggregate in the parent element
 * For all other type, following a markdown with any paragraph of text is considered a continuation, so we aggregate
 * all subsequent text into the same parent element (paragraph, list item, ...)
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function collapseParagraph( rawIROfMarkdown ){
	const { breakedLineNodes } = rawIROfMarkdown.reduce( ( { breakedLineNodes, currentParent, lastWasAlsoAParagraph }, currentLineNode ) => {
		
		if( currentLineNode.adfType === 'heading'
			|| currentLineNode.adfType === 'divider'
			|| currentLineNode.adfType === 'codeBlock' ){
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes }
		}
		
		if( currentLineNode.adfType !== 'paragraph' ){
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes, currentParent: currentLineNode }
		}
		
		if( !lastWasAlsoAParagraph
			&& /^(?:[\s]*)$/.test( currentLineNode.textToEmphasis ) ) {
			//we're breaking into a new paragraph
			return { breakedLineNodes, lastWasAlsoAParagraph: true }
		}
		
		if( lastWasAlsoAParagraph
			&& /^(?:[\s]*)$/.test( currentLineNode.textToEmphasis ) ) {
			//we've double break, we add a paragraph
			breakedLineNodes.push( currentLineNode )
			return { breakedLineNodes }
		}
		
		//this is a non-empty paragraph, if we are already filling up a paragraph, let's add the text inside
		if( currentParent ){
			const textToAdd = currentLineNode.textPosition >= currentParent.textPosition
							  ? currentLineNode.textToEmphasis.slice( currentParent.textPosition )
							  : currentLineNode.textToEmphasis
			currentParent.textToEmphasis = currentParent.textToEmphasis + ( currentLineNode.textToEmphasis.charAt( 0 ) !== ' '
																			? ' ' + textToAdd
																			: textToAdd )
			return { breakedLineNodes, currentParent }
		}
		
		//this is a lone new paragraph, we add it to the list
		breakedLineNodes.push( currentLineNode )
		return { breakedLineNodes, currentParent: currentLineNode }
		
	}, { breakedLineNodes: [ ] } )
	
	return breakedLineNodes
}


/**
 * Realign children nodes to orderedList and bulletList
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {IRElement[]}	an array of IRElement
 */
function accumulateLevelFromList( rawIROfMarkdown ){
	const { accumulatedNodes } = rawIROfMarkdown.reduce( ( { accumulatedNodes, indexCurrentList }, currentLineNode ) => {
		accumulatedNodes.push( currentLineNode )
		
		if( currentLineNode.adfType === 'heading'
			|| currentLineNode.adfType === 'divider' )
			return { accumulatedNodes }
		
		if( currentLineNode.adfType === 'bulletList' || currentLineNode.adfType === 'orderedList' ){
			return { accumulatedNodes, indexCurrentList: accumulatedNodes.length - 1 }
		}
		
		return { accumulatedNodes, indexCurrentList }
		
	}, { accumulatedNodes: [ ] } )
	
	return accumulatedNodes
}

/**
 * Build an array of all the different level (defined by the lists) we have to manage
 *  and their corresponding textPosition
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into collapsing
 *
 * @returns {Number[]}		an array of the textPosition for each level
 */
function createLevelList( rawIROfMarkdown ){
	return rawIROfMarkdown.reduce( ( currentLevelList, currentNode ) => {
		if( currentNode.adfType !== 'orderedList'
			&& currentNode.adfType !== 'bulletList' )
			return currentLevelList
		
		return ( currentLevelList.includes( currentNode.textPosition + 2 ) || currentLevelList.includes( currentNode.textPosition + 3 ) )
			   ? currentLevelList
			   : currentNode.textPosition + 2 > ( currentLevelList[ currentLevelList.length - 1 ] + 1 )
				 ? [ ...currentLevelList, currentNode.textPosition + 2 ]
				 : currentLevelList
	}, [ 0 ] )
}


/**
 * Map all element to their level in an array of level
 *
 * @param rawIROfMarkdown	{Array} 	the array of IRElement to look into mapping
 * @param levelsPosition	{Array} 	the list of level's textPosition to use
 *
 * @returns {IRTreeNode[]}		an array of IRTreeNode
 */
function mapIRToLevels( rawIROfMarkdown, levelsPosition ){
	return levelsPosition.map( ( currentLevelPosition, currentIndex ) => {
		return rawIROfMarkdown.filter( currentList => ( currentList.textPosition >= currentLevelPosition
														 && ( currentIndex === levelsPosition.length - 1 //this is the last level
															  || currentList.textPosition < levelsPosition[ currentIndex + 1 ] ) ) )
							   .map( currentList => ( {
								   indexOfList: rawIROfMarkdown.indexOf( currentList ),
								   children: [],
								   node: currentList } ) )
	} )
}

/**
 * Map all element to their level in an array of level
 *
 * @param levelsMap			{Array} 	the level array of array of IRElement
 *
 * @returns {IRTreeNode[]}				tree of IRElements and their children
 */
function buildTreeFromLevelMap( levelsMap ){
	const treeOfNode = levelsMap.reduce( ( currentTree, currentArrayOfListIndexes, currentIndexInTheArrayOfListIndexes ) => {
		const stepAtTree = currentArrayOfListIndexes.reduce( ( currentTreeValues, currentListValues ) => {
			if( currentIndexInTheArrayOfListIndexes <= 0 )
				return [ ...currentTreeValues, currentListValues ]
			
			const parentList = levelsMap[ currentIndexInTheArrayOfListIndexes - 1 ]
			const lastParentWithIndexBelow = parentList.findIndex( currentParentListIndex => {
				return currentParentListIndex.indexOfList > currentListValues.indexOfList
			} )
			const parentIndexToUse = lastParentWithIndexBelow === -1
									 ? parentList.length - 1
									 : lastParentWithIndexBelow === 0
									   ? 0
									   : lastParentWithIndexBelow - 1
			if( parentIndexToUse < 0 )
				throw 'Parent list of node is empty!'
			
			parentList[ parentIndexToUse ].children.push( currentListValues )
			
			return currentTreeValues
		}, currentTree )
		return stepAtTree
	}, [] )
	
	return treeOfNode
}

module.exports = buildTreeFromMarkdown


/***/ }),

/***/ 198:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decision_1 = __webpack_require__(135);
var index_1 = __webpack_require__(492);
var DecisionList = /** @class */ (function (_super) {
    __extends(DecisionList, _super);
    function DecisionList(localId) {
        var _this = _super.call(this) || this;
        _this.localId = localId;
        _this.content = new index_1.ContentNode('decisionList');
        return _this;
    }
    DecisionList.prototype.decision = function (localId, state) {
        return this.content.add(new decision_1.Decision(localId, state));
    };
    DecisionList.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId
            } });
    };
    return DecisionList;
}(index_1.TopLevelNode));
exports.DecisionList = DecisionList;
//# sourceMappingURL=decision-list.js.map

/***/ }),

/***/ 206:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(href, title) {
        var _this = _super.call(this, 'link') || this;
        _this.href = href;
        _this.title = title;
        return _this;
    }
    Link.prototype.toJSON = function () {
        var linkMark = {
            type: this.type,
            attrs: {
                href: this.href
            }
        };
        if (this.title) {
            linkMark.attrs.title = this.title;
        }
        return linkMark;
    };
    return Link;
}(mark_1.Mark));
exports.Link = Link;
//# sourceMappingURL=link.js.map

/***/ }),

/***/ 223:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.toJSON = function () {
        return {
            type: 'rule'
        };
    };
    return Rule;
}(index_1.TopLevelNode));
exports.Rule = Rule;
//# sourceMappingURL=rule.js.map

/***/ }),

/***/ 263:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var table_row_1 = __webpack_require__(632);
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('table');
        return _this;
    }
    Table.prototype.row = function () {
        return this.content.add(new table_row_1.TableRow());
    };
    Table.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Table.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return Table;
}(index_1.TopLevelNode));
exports.Table = Table;
//# sourceMappingURL=table.js.map

/***/ }),

/***/ 270:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bullet_list_1 = __webpack_require__(849);
var heading_1 = __webpack_require__(366);
var index_1 = __webpack_require__(492);
var ordered_list_1 = __webpack_require__(982);
var paragraph_1 = __webpack_require__(147);
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel(panelType) {
        var _this = _super.call(this) || this;
        _this.panelType = panelType;
        _this.content = new index_1.ContentNode('panel');
        return _this;
    }
    Panel.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    Panel.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    Panel.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    Panel.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    Panel.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                panelType: this.panelType
            } });
    };
    return Panel;
}(index_1.TopLevelNode));
exports.Panel = Panel;
//# sourceMappingURL=panel.js.map

/***/ }),

/***/ 284:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var emoji_1 = __webpack_require__(526);
var hard_break_1 = __webpack_require__(570);
var index_1 = __webpack_require__(492);
var mention_1 = __webpack_require__(962);
var text_1 = __webpack_require__(171);
var Task = /** @class */ (function () {
    function Task(localId, state) {
        this.localId = localId;
        this.state = state;
        this.content = new index_1.ContentNode('taskItem');
    }
    Task.prototype.text = function (text, marks) {
        return this.add(new text_1.Text(text, marks));
    };
    Task.prototype.code = function (text) {
        return this.add(text_1.code(text));
    };
    Task.prototype.em = function (text) {
        return this.add(text_1.em(text));
    };
    Task.prototype.link = function (text, href, title) {
        return this.add(text_1.link(text, href, title));
    };
    Task.prototype.strike = function (text) {
        return this.add(text_1.strike(text));
    };
    Task.prototype.strong = function (text) {
        return this.add(text_1.strong(text));
    };
    Task.prototype.mention = function (id, text) {
        return this.add(new mention_1.Mention(id, text));
    };
    Task.prototype.emoji = function (shortName, id, text) {
        return this.add(new emoji_1.Emoji({ shortName: shortName, id: id, text: text }));
    };
    Task.prototype.hardBreak = function () {
        return this.add(new hard_break_1.HardBreak());
    };
    Task.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    Task.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId,
                state: this.state
            } });
    };
    return Task;
}());
exports.Task = Task;
var TaskState;
(function (TaskState) {
    TaskState["TODO"] = "TODO";
    TaskState["DONE"] = "DONE";
})(TaskState = exports.TaskState || (exports.TaskState = {}));
//# sourceMappingURL=task.js.map

/***/ }),

/***/ 286:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = __webpack_require__(802);
exports.Document = document_1.Document;
var tag_1 = __webpack_require__(322);
exports.document = tag_1.document;
__export(__webpack_require__(451));
__export(__webpack_require__(893));
__export(__webpack_require__(849));
__export(__webpack_require__(561));
__export(__webpack_require__(198));
__export(__webpack_require__(135));
__export(__webpack_require__(526));
__export(__webpack_require__(570));
__export(__webpack_require__(366));
__export(__webpack_require__(566));
__export(__webpack_require__(823));
__export(__webpack_require__(659));
__export(__webpack_require__(371));
__export(__webpack_require__(962));
__export(__webpack_require__(982));
__export(__webpack_require__(270));
__export(__webpack_require__(147));
__export(__webpack_require__(223));
__export(__webpack_require__(301));
__export(__webpack_require__(639));
__export(__webpack_require__(632));
__export(__webpack_require__(263));
__export(__webpack_require__(976));
__export(__webpack_require__(284));
__export(__webpack_require__(171));
__export(__webpack_require__(812));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 294:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Underline = /** @class */ (function (_super) {
    __extends(Underline, _super);
    function Underline() {
        return _super.call(this, 'underline') || this;
    }
    return Underline;
}(mark_1.Mark));
exports.Underline = Underline;
//# sourceMappingURL=underline.js.map

/***/ }),

/***/ 301:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var application_card_1 = __webpack_require__(451);
var block_quote_1 = __webpack_require__(893);
var bullet_list_1 = __webpack_require__(849);
var code_block_1 = __webpack_require__(561);
var decision_list_1 = __webpack_require__(198);
var heading_1 = __webpack_require__(366);
var index_1 = __webpack_require__(492);
var media_group_1 = __webpack_require__(823);
var ordered_list_1 = __webpack_require__(982);
var panel_1 = __webpack_require__(270);
var paragraph_1 = __webpack_require__(147);
var rule_1 = __webpack_require__(223);
var task_list_1 = __webpack_require__(976);
var colorPattern = /^#[0-9a-f]{6}$/;
var TableCell = /** @class */ (function () {
    function TableCell(backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.content = new index_1.ContentNode('tableCell');
        if (backgroundColor) {
            if (!colorPattern.test(backgroundColor)) {
                throw new Error("Color " + backgroundColor + " does not match ^#[0-9a-f]{6}$");
            }
        }
    }
    TableCell.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    TableCell.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    TableCell.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    TableCell.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    TableCell.prototype.panel = function (panelType) {
        return this.content.add(new panel_1.Panel(panelType));
    };
    TableCell.prototype.blockQuote = function () {
        return this.content.add(new block_quote_1.BlockQuote());
    };
    TableCell.prototype.rule = function () {
        return this.content.add(new rule_1.Rule());
    };
    TableCell.prototype.mediaGroup = function () {
        return this.content.add(new media_group_1.MediaGroup());
    };
    TableCell.prototype.applicationCard = function (title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    };
    TableCell.prototype.decisionList = function (localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    };
    TableCell.prototype.taskList = function (localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    };
    TableCell.prototype.codeBlock = function (language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    };
    TableCell.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                background: this.backgroundColor
            } });
    };
    return TableCell;
}());
exports.TableCell = TableCell;
//# sourceMappingURL=table-cell.js.map

/***/ }),

/***/ 322:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = __webpack_require__(802);
var index_1 = __webpack_require__(492);
function document(strings) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var doc = new document_1.Document();
    var paragraph = doc.paragraph();
    for (var i = 0; i < args.length; i++) {
        if (strings[i].length) {
            paragraph.text(strings[i]);
        }
        if (args[i] instanceof index_1.TopLevelNode) {
            throw new Error('Top level nodes cannot be used in tagged templates');
        }
        if (args[i] instanceof index_1.InlineNode) {
            paragraph.add(args[i]);
        }
        else {
            var stringified = String(args[i]);
            if (stringified.length > 0) {
                paragraph.text(stringified);
            }
        }
    }
    if (strings[args.length].length > 0) {
        paragraph.text(strings[args.length]);
    }
    return doc;
}
exports.document = document;
//# sourceMappingURL=tag.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __unusedexports, __webpack_require__) {

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
const { marks, Heading, Text, Emoji, BulletList, OrderedList, ListItem, CodeBlock, BlockQuote, Paragraph, Rule, Mention, Table, TableCell, TableHeader, TableRow }	= __webpack_require__( 286 )
const { ContentNode } = __webpack_require__(492)

const attachTextToNodeSliceEmphasis = __webpack_require__( 804 )

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
							   ? nodeOrListNode.content.add( new ListItem() )
							   : nodeOrListNode
		const nodeToAttachTextTo = currentNode.node.adfType === 'orderedList' || currentNode.node.adfType === 'bulletList' || currentNode.node.adfType === 'blockQuote'
								   ? typeof currentNode.node.textToEmphasis !== 'undefined' || currentNode.children.length === 0
									 ? nodeOrListItem.content.add( new Paragraph() )
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

		else if( currentNode.node.adfType === 'table' )
			currentNode.children = currentNode.node.rows

		else if( currentNode.node.adfType === 'tableRow' || currentNode.node.adfType === 'tableHeader' )
			currentNode.children = currentNode.node.cells

		else if( currentNode.node.adfType === 'tableCell' )
			currentNode.children = [ currentNode.node.value ]

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
			return adfNodeToAttachTo.content.add( new Heading( typeParams ) )
		
		case "divider":
			return adfNodeToAttachTo.content.add( new Rule() )
		
		case "bulletList":
			return adfNodeToAttachTo.content.add( new BulletList() )
		
		case "orderedList": {
			const orderedListNode = new OrderedList( )
			if( typeParams ) orderedListNode.attrs = { order: typeParams }
			return adfNodeToAttachTo.content.add( orderedListNode )
		}
		
		case "codeBlock":
			return adfNodeToAttachTo.content.add( new CodeBlock( typeParams ) )
		
		case "blockQuote":
			return adfNodeToAttachTo.content.add( new BlockQuote() )
		
		case "paragraph":
			return adfNodeToAttachTo.content.add( new Paragraph() )
		
		case "table":
			return adfNodeToAttachTo.content.add( new Table() )

		case "tableHeader":
			return adfNodeToAttachTo.content.add( new TableHeader() )

		case "tableRow":
			return adfNodeToAttachTo.content.add( new TableRow() )

		case "tableCell":
			return adfNodeToAttachTo.content.add( new TableCell() )

		default:
			throw 'incompatible type'
	}
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
		switch( currentSlice.type ){
			case 'inline':
				const inlineCodeNode = new Text( currentSlice.text, marks().code() )
				nodeToAttachTo.content.add( inlineCodeNode )
				break
			
			case 'emoji':
				const emojiNode = new Emoji( {shortName: currentSlice.text } )
				nodeToAttachTo.content.add( emojiNode )
				break
			
			case 'link':
				const linkNode = new Text( currentSlice.text,
										   marks().link( currentSlice.optionalText1,
														 currentSlice.optionalText2 ) )
				nodeToAttachTo.content.add( linkNode )
				break
			
			case 'mention':
				const mentionNode = new Mention( currentSlice.optionalText1, currentSlice.text)
				nodeToAttachTo.content.add( mentionNode )
				break
			
			case 'image':
				const imageNode = new Text( currentSlice.text,
											marks().link( currentSlice.optionalText1,
														  currentSlice.optionalText2 ) )
				nodeToAttachTo.content.add( imageNode )
				break
			
			default:
				attachTextToNodeSliceEmphasis( nodeToAttachTo, currentSlice.text )
			// const textNode = new Text( currentSlice.text, marksToUse )
			// nodeToAttachTo.content.add( textNode )
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
	return sliceOneMatchFromRegexp( rawText, 'emoji',/(?<nonMatchBefore>[^`]*)(?::(?<match>[^`\s]+):)(?<nonMatchAfter>[^`]*)/g )
}

/**
 * Match text content with and ADF link type
 *
 * @param rawText				{String}	the text content to try to match
 *
 * @returns 					{String[]}	the different slice matching a link style
 */
function sliceLink( rawText ){
  const regex = /(\[.*?\]\(.*?\))/;
  const splitted = rawText.split(regex);
  return splitted.map(str => {
    if (regex.test(str)) {
      const typeTag = str[1] === "@" ? "mention" : "link";
      const catchText = str.match(/\[(.*?)\]\((.*?)\)/);

      let optionalText1 = ""
      let optionalText2

      // allow for an empty link
      if (catchText[2] !== "") {
        const match = catchText[2].match(/(\S+)( "(.*)")?/);
        optionalText1 = match[1];
        optionalText2 = match[3];
      }

      return {
        isMatching: true,
        type: typeTag,
        text: catchText[1],
        optionalText1,
        optionalText2
      }
    } else {
      return {
        isMatching: false,
        text: str,
      }
    }
  });
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
  const textNode = new Text( textToAttach )
  nodeToAttachTo.content.add( textNode )
}

module.exports = fillADFNodesWithMarkdown


/***/ }),

/***/ 366:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var text_1 = __webpack_require__(171);
var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        _this.content = new index_1.ContentNode('heading');
        if (level < 1 || level > 6) {
            throw new Error('Level must be in the range of 1-6');
        }
        return _this;
    }
    Heading.prototype.link = function (text, href, title) {
        this.content.add(text_1.link(text, href, title));
        return this;
    };
    Heading.prototype.text = function (text) {
        this.content.add(text_1.plain(text));
        return this;
    };
    Heading.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                level: this.level
            } });
    };
    return Heading;
}(index_1.TopLevelNode));
exports.Heading = Heading;
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ 371:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Media = /** @class */ (function () {
    function Media(attrs) {
        this.attrs = attrs;
    }
    Media.prototype.toJSON = function () {
        var media = {
            type: 'media',
            attrs: {
                id: this.attrs.id,
                type: this.attrs.type,
                collection: this.attrs.collection
            }
        };
        if (this.attrs.occurrenceKey) {
            media.attrs.occurrenceKey = this.attrs.occurrenceKey;
        }
        if (this.attrs.url) {
            media.attrs.url = this.attrs.url;
        }
        if (this.attrs.width) {
            media.attrs.width = this.attrs.width;
        }
        if (this.attrs.height) {
            media.attrs.height = this.attrs.height;
        }
        return media;
    };
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=media.js.map

/***/ }),

/***/ 396:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var SubSup = /** @class */ (function (_super) {
    __extends(SubSup, _super);
    function SubSup(variant) {
        var _this = _super.call(this, 'subsup') || this;
        _this.variant = variant;
        return _this;
    }
    SubSup.prototype.toJSON = function () {
        return {
            type: this.type,
            attrs: {
                type: this.variant
            }
        };
    };
    return SubSup;
}(mark_1.Mark));
exports.SubSup = SubSup;
//# sourceMappingURL=subsup.js.map

/***/ }),

/***/ 400:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Em = /** @class */ (function (_super) {
    __extends(Em, _super);
    function Em() {
        return _super.call(this, 'em') || this;
    }
    return Em;
}(mark_1.Mark));
exports.Em = Em;
//# sourceMappingURL=em.js.map

/***/ }),

/***/ 451:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var Action = /** @class */ (function () {
    function Action() {
    }
    Action.prototype.title = function (title) {
        this.actionTitle = title;
        return this;
    };
    Action.prototype.target = function (target) {
        if (!target.key) {
            throw new Error('Action target key is required');
        }
        this.actionTarget = target;
        return this;
    };
    Action.prototype.parameters = function (parameters) {
        this.actionParameters = parameters;
        return this;
    };
    Action.prototype.toJSON = function () {
        var action = {};
        if (this.actionTitle) {
            action.title = this.actionTitle;
        }
        if (this.actionTarget) {
            action.target = this.actionTarget;
        }
        if (this.actionParameters) {
            action.parameters = this.actionParameters;
        }
        if (Object.keys(action).length < 2) {
            throw new Error('Must set title and target attributes for action');
        }
        return action;
    };
    return Action;
}());
exports.Action = Action;
var Detail = /** @class */ (function () {
    function Detail() {
        this.detailUsers = [];
    }
    Detail.prototype.title = function (text) {
        this.detailTitle = text;
        return this;
    };
    Detail.prototype.text = function (text) {
        this.detailText = text;
        return this;
    };
    Detail.prototype.lozenge = function (lozenge) {
        this.detailLozenge = lozenge;
        return this;
    };
    Detail.prototype.icon = function (icon) {
        this.detailIcon = icon;
        return this;
    };
    Detail.prototype.badge = function (badge) {
        this.detailBadge = badge;
        return this;
    };
    Detail.prototype.user = function (user) {
        this.detailUsers.push(user);
        return this;
    };
    Detail.prototype.toJSON = function () {
        var detail = {};
        if (this.detailTitle) {
            detail.title = this.detailTitle;
        }
        if (this.detailText) {
            detail.text = this.detailText;
        }
        if (this.detailIcon) {
            detail.icon = this.detailIcon;
        }
        if (this.detailBadge) {
            detail.badge = this.detailBadge;
        }
        if (this.detailLozenge) {
            detail.lozenge = this.detailLozenge;
        }
        if (this.detailUsers.length > 0) {
            detail.users = this.detailUsers;
        }
        if (Object.keys(detail).length === 0) {
            throw new Error('Must at least set one attribute');
        }
        return detail;
    };
    return Detail;
}());
exports.Detail = Detail;
var Context = /** @class */ (function () {
    function Context(text) {
        this.text = text;
    }
    Context.prototype.icon = function (icon) {
        this.contextIcon = icon;
        return this;
    };
    Context.prototype.toJSON = function () {
        var context = {
            text: this.text
        };
        if (this.contextIcon) {
            context.icon = this.contextIcon;
        }
        return context;
    };
    return Context;
}());
exports.Context = Context;
var TitleUser = /** @class */ (function () {
    function TitleUser(titleUserIcon) {
        this.titleUserIcon = titleUserIcon;
    }
    TitleUser.prototype.id = function (id) {
        this.titleUserId = id;
        return this;
    };
    TitleUser.prototype.toJSON = function () {
        var titleUser = {
            icon: this.titleUserIcon
        };
        if (this.titleUserId) {
            titleUser.id = this.titleUserId;
        }
        return titleUser;
    };
    return TitleUser;
}());
exports.TitleUser = TitleUser;
var ApplicationCard = /** @class */ (function (_super) {
    __extends(ApplicationCard, _super);
    function ApplicationCard(title, text) {
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.text = text;
        _this.isCollapsible = false;
        _this.details = [];
        _this.actions = [];
        return _this;
    }
    ApplicationCard.prototype.link = function (url) {
        this.linkUrl = url;
        return this;
    };
    ApplicationCard.prototype.background = function (url) {
        this.backgroundUrl = url;
        return this;
    };
    ApplicationCard.prototype.preview = function (url) {
        this.previewUrl = url;
        return this;
    };
    ApplicationCard.prototype.collapsible = function (collapsible) {
        this.isCollapsible = collapsible;
        return this;
    };
    ApplicationCard.prototype.description = function (text) {
        this.descriptionText = text;
        return this;
    };
    ApplicationCard.prototype.titleUser = function (icon) {
        var titleUser = new TitleUser(icon);
        this.userInTitle = titleUser;
        return titleUser;
    };
    ApplicationCard.prototype.detail = function () {
        var detail = new Detail();
        this.details.push(detail);
        return detail;
    };
    ApplicationCard.prototype.action = function () {
        var action = new Action();
        this.actions.push(action);
        return action;
    };
    ApplicationCard.prototype.context = function (text) {
        this.cardContext = new Context(text);
        return this.cardContext;
    };
    ApplicationCard.prototype.toJSON = function () {
        var card = {
            type: 'applicationCard',
            attrs: {
                text: this.text || this.title,
                title: {
                    text: this.title
                },
                collapsible: this.isCollapsible
            }
        };
        if (this.linkUrl) {
            card.attrs.textUrl = this.linkUrl;
            card.attrs.link = {
                url: this.linkUrl
            };
        }
        if (this.backgroundUrl) {
            card.attrs.background = {
                url: this.backgroundUrl
            };
        }
        if (this.previewUrl) {
            card.attrs.preview = {
                url: this.previewUrl
            };
        }
        if (this.descriptionText) {
            card.attrs.description = {
                text: this.descriptionText
            };
        }
        if (this.userInTitle) {
            card.attrs.title.user = this.userInTitle.toJSON();
        }
        if (this.details.length > 0) {
            card.attrs.details = this.details.map(function (detail) { return detail.toJSON(); });
        }
        if (this.actions.length > 0) {
            card.attrs.actions = this.actions.map(function (action) { return action.toJSON(); });
        }
        if (this.cardContext) {
            card.attrs.context = this.cardContext.toJSON();
        }
        return card;
    };
    return ApplicationCard;
}(index_1.TopLevelNode));
exports.ApplicationCard = ApplicationCard;
//# sourceMappingURL=application-card.js.map

/***/ }),

/***/ 492:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentNode = /** @class */ (function () {
    function ContentNode(type, minLength) {
        if (minLength === void 0) { minLength = 1; }
        this.type = type;
        this.minLength = minLength;
        this.content = [];
    }
    ContentNode.prototype.toJSON = function () {
        if (this.content.length < this.minLength) {
            return {
                type: this.type,
                //We cannot import Paragraph as it is the subclass :(
                //content: [new Paragraph().text(' ').toJSON()] 
                content: [{
                        type: 'paragraph',
                        content: [{
                                type: 'text',
                                text: ' '
                            }]
                    }]
            };
        }
        return {
            type: this.type,
            content: this.content.map(function (node) { return node.toJSON(); })
        };
    };
    ContentNode.prototype.add = function (node) {
        if (!node) {
            throw new Error('Illegal value');
        }
        this.content.push(node);
        return node;
    };
    Object.defineProperty(ContentNode.prototype, "length", {
        get: function () {
            return this.content.length;
        },
        enumerable: true,
        configurable: true
    });
    ContentNode.prototype.getItem = function (index) {
        return this.content[index];
    };
    return ContentNode;
}());
exports.ContentNode = ContentNode;
var TopLevelNode = /** @class */ (function () {
    function TopLevelNode() {
    }
    return TopLevelNode;
}());
exports.TopLevelNode = TopLevelNode;
var InlineNode = /** @class */ (function () {
    function InlineNode() {
    }
    return InlineNode;
}());
exports.InlineNode = InlineNode;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __unusedexports, __webpack_require__) {

/***********************************************************************************************************************
 *
 * Take any markdown (Github focussed for now) and translate it into a JIRA/Confluence compatible ADF document
 *
 *  @author bruno.morel@b-yond.com
 *
 **********************************************************************************************************************/
const { Document }	= __webpack_require__( 286 )


const buildIRTreeFromMarkdown = __webpack_require__( 197 )
const fillADFNodesWithMarkdown = __webpack_require__( 326 )

function translateGITHUBMarkdownToADF( markdownText ){
	
	const textTree = buildIRTreeFromMarkdown( markdownText )
	
	const adfRoot = new Document()
	if( textTree.length > 0 )
		fillADFNodesWithMarkdown( adfRoot, textTree )
	
	return adfRoot
}

module.exports = translateGITHUBMarkdownToADF


/***/ }),

/***/ 526:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
function emoji(shortName, id, text) {
    return new Emoji({ shortName: shortName, id: id, text: text });
}
exports.emoji = emoji;
var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji(attrs) {
        var _this = _super.call(this) || this;
        _this.attrs = attrs;
        return _this;
    }
    Emoji.prototype.toJSON = function () {
        var emojiNode = {
            type: 'emoji',
            attrs: {
                shortName: this.attrs.shortName
            }
        };
        if (this.attrs.id) {
            emojiNode.attrs.id = this.attrs.id;
        }
        if (this.attrs.text) {
            emojiNode.attrs.text = this.attrs.text;
        }
        return emojiNode;
    };
    return Emoji;
}(index_1.InlineNode));
exports.Emoji = Emoji;
//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 561:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var text_1 = __webpack_require__(171);
var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock(language) {
        var _this = _super.call(this) || this;
        _this.language = language;
        _this.content = new index_1.ContentNode('codeBlock');
        return _this;
    }
    CodeBlock.prototype.text = function (code) {
        this.content.add(text_1.plain(code));
        return this;
    };
    CodeBlock.prototype.toJSON = function () {
        var codeBlock = this.content.toJSON();
        if (this.language) {
            codeBlock.attrs = {
                language: this.language
            };
        }
        return codeBlock;
    };
    return CodeBlock;
}(index_1.TopLevelNode));
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=code-block.js.map

/***/ }),

/***/ 566:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bullet_list_1 = __webpack_require__(849);
var index_1 = __webpack_require__(492);
var ordered_list_1 = __webpack_require__(982);
var paragraph_1 = __webpack_require__(147);
var ListItem = /** @class */ (function () {
    function ListItem() {
        this.content = new index_1.ContentNode('listItem');
    }
    ListItem.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    ListItem.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    ListItem.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    ListItem.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=list-item.js.map

/***/ }),

/***/ 570:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
function hardBreak() {
    return new HardBreak();
}
exports.hardBreak = hardBreak;
var HardBreak = /** @class */ (function (_super) {
    __extends(HardBreak, _super);
    function HardBreak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardBreak.prototype.toJSON = function () {
        return {
            type: 'hardBreak',
            attrs: {
                text: '\n'
            }
        };
    };
    return HardBreak;
}(index_1.InlineNode));
exports.HardBreak = HardBreak;
//# sourceMappingURL=hard-break.js.map

/***/ }),

/***/ 572:
/***/ (function(module) {

/**********************************************************************************************************************
 *
 *  Markdown Parser
 *
 *  @author bruno.morel@b-yond.com
 *---------------------------------------------------------------------------------------------------------------------
 *
 * This translate all markdown to an intermediate representation composed as an array with
 *  each item containing and object with the follow properties:
 *      adfType : 		the ADF type of the line (heading, paragraph, orderedList, ...
 *      textToEmphasis: the actuel text (if any) attached to the element
 *      typeParam:		any extra parameter for special types (language for codeBlock)
 *      nodeAttached: 	element to manage the special case of a codeBlock attached to a list
 *      textPosition: 	the actual start position of the text (used later for level identication)
 *
 **********************************************************************************************************************/

/**
 * @typedef {Object}  IRElement
 * @property {number} 		adfType 		- ADF type of the expression
 * @property {number} 		textPosition 	- the actual start of the text (adfType dependent)
 * @property {string} 		textToEmphasis 	- actual text of the element (adfType dependent)
 * @property {string} 		typeParam 		- extra parameters adfType dependent
 * @property {IRElement} 	nodeAttached 	- an attached code block to a list
 */

/**
 * Parse markdown into an Intermediate representation
 *
 * @param markdownLineTextWithTabs an array of markdown expression to process
 * @returns {IRElement}		an intermediate representation of the markdown element
 */
function parseMarkdownLinetoIR( markdownLineTextWithTabs ){
	//to simplify tab management we replace them with spaces
	const markdownLine = markdownLineTextWithTabs.replace( /\t/g, '    ' )
	
	//we try to match each line to match with a markdown expression
	// or we push an empty paragraph
	
	const headerNode = matchHeader( markdownLine )
	if( headerNode ) return headerNode
	
	const divider = matchDivider( markdownLine )
	if( divider ) return divider
	
	const listNode = matchList( markdownLine )
	if( listNode ) return listNode
	
	const blockQuoteNode = matchBlockQuote( markdownLine )
	if( blockQuoteNode ) return blockQuoteNode
	
	const codeBlockNode = matchCodeBlock( markdownLine )
	if( codeBlockNode ) return codeBlockNode
	
	const paragraphNode = matchParagraph( markdownLine )
	if( paragraphNode ) return paragraphNode
	
	//this is a line break then
	return { 	adfType : 		"paragraph",
		textToEmphasis: "",
		textPosition: 	markdownLine.length }
}

/**
 * Matching of the markdown header
 *
 * @param lineToMatch actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchHeader( lineToMatch ){
	const headerType = lineToMatch.match( /^(?<headerNumber>[#]{1,6}) (?<headerText>.*)$/i )
	if( headerType
		&& headerType.groups
		&& headerType.groups.headerNumber
		&& headerType.groups.headerText ){
		return { 	adfType : 		"heading",//adfRoot.heading( headerType.groups.headerNumber.length ),
			textToEmphasis: headerType.groups.headerText,
			typeParam:		headerType.groups.headerNumber.length,
			textPosition: 	0
		}
	}
	
	return null
}

/**
 * Matching of a markdown list
 *
 * @param lineToMatch actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchList( lineToMatch ){
  const list = lineToMatch.match( /^(?<witespace>\s*)(?:[*\-+] |(?<orderedNumber>[0-9]+)[.)] )+(?<listText>.*)$/i )
	if( list
		&& list.groups
		&& list.groups.listText ){
		// adfDescription.bulletList( )
		// 			  .textItem(  )
		const textIsCodeBlock = matchCodeBlock( list.groups.listText )
		if( textIsCodeBlock )
			textIsCodeBlock.textPosition = lineToMatch.indexOf( list.groups.listText )
		
		return { 	adfType	: 		list.groups.orderedNumber
										? "orderedList"
										: "bulletList",
			typeParam:		list.groups.orderedNumber,
			textToEmphasis: textIsCodeBlock ? '': list.groups.listText,
			textPosition: 	list.groups.witespace.length,
			nodeAttached: 	textIsCodeBlock
		}
	}
	
	return null
}

/**
 * Match a markdown code block
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchCodeBlock( lineToMatch ){
	const codeBlock = lineToMatch.match( /^(?:[\s]*```)(?<Language>[^\s]*)$/i )
	if( codeBlock
		&& codeBlock.groups ){
		
		return { 	adfType: 		"codeBlock",
			typeParam:		codeBlock.groups.Language,
			textPosition: 	lineToMatch.indexOf( '```' ),
			textToEmphasis: '' }
	}
	
	return null
}

/**
 * Match a markdown blockquote
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchBlockQuote( lineToMatch ){
	const blockquote = lineToMatch.match( /^(?:[\s])*> (?<quoteText>.*)$/i )
	if( blockquote
		&& blockquote.groups
		&& blockquote.groups.quoteText ){
		
		return { 	adfType : 		"blockQuote",
			textToEmphasis: blockquote.groups.quoteText,
			textPosition: 	lineToMatch.indexOf( '> ' ) }
	}
	
	return null
}

/**
 * Match a markdown paragraph
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchParagraph( lineToMatch ){
	const paragraph = lineToMatch.match( /^(?:[\s]*)(?<paragraphText>[^\n]+)$/ )
	if( paragraph
		&& paragraph.groups
		&& paragraph.groups.paragraphText ){
		return { 	adfType : 		"paragraph",
			textToEmphasis: paragraph.groups.paragraphText,
			textPosition: 	!paragraph.groups.paragraphText.match( /^(?:[\s]*)$/ )
							 ? lineToMatch.indexOf( paragraph.groups.paragraphText )
							 : lineToMatch.length }
	}
	
	return null
}

/**
 * Match a markdown divider
 *
 * @param lineToMatch 	actual expression to match
 *
 * @returns {IRElement} | null if the expression doesn't match
 */
function matchDivider( lineToMatch ){
	const divider = lineToMatch.match( /^(\s*-{3,}\s*|\s*\*{3,}\s*|\s*_{3,}\s*)$/ )
	if( divider ){
		return { 	adfType : 		"divider",
			textToEmphasis: '',
			textPosition: 	0 }
	}
	
	return null
}

module.exports = parseMarkdownLinetoIR


/***/ }),

/***/ 601:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super.call(this, 'code') || this;
    }
    return Code;
}(mark_1.Mark));
exports.Code = Code;
//# sourceMappingURL=code.js.map

/***/ }),

/***/ 620:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(title, target, actionParameters) {
        var _this = _super.call(this, 'action') || this;
        _this.title = title;
        _this.target = target;
        _this.actionParameters = actionParameters;
        return _this;
    }
    Action.prototype.toJSON = function () {
        var actionMark = {
            type: this.type,
            attrs: {
                title: this.title,
                target: this.target
            }
        };
        if (this.actionParameters) {
            actionMark.attrs.parameters = this.actionParameters;
        }
        return actionMark;
    };
    return Action;
}(mark_1.Mark));
exports.Action = Action;
//# sourceMappingURL=action.js.map

/***/ }),

/***/ 632:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var table_cell_1 = __webpack_require__(301);
var table_header_1 = __webpack_require__(639);
var TableRow = /** @class */ (function () {
    function TableRow() {
        this.content = new index_1.ContentNode('tableRow');
    }
    TableRow.prototype.cell = function (backgroundColor) {
        return this.content.add(new table_cell_1.TableCell(backgroundColor));
    };
    TableRow.prototype.header = function (backgroundColor) {
        return this.content.add(new table_header_1.TableHeader(backgroundColor));
    };
    TableRow.prototype.add = function (node) {
        this.content.add(node);
        return this;
    };
    TableRow.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return TableRow;
}());
exports.TableRow = TableRow;
//# sourceMappingURL=table-row.js.map

/***/ }),

/***/ 639:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var application_card_1 = __webpack_require__(451);
var block_quote_1 = __webpack_require__(893);
var bullet_list_1 = __webpack_require__(849);
var code_block_1 = __webpack_require__(561);
var decision_list_1 = __webpack_require__(198);
var heading_1 = __webpack_require__(366);
var index_1 = __webpack_require__(492);
var media_group_1 = __webpack_require__(823);
var ordered_list_1 = __webpack_require__(982);
var panel_1 = __webpack_require__(270);
var paragraph_1 = __webpack_require__(147);
var rule_1 = __webpack_require__(223);
var task_list_1 = __webpack_require__(976);
var colorPattern = /^#[0-9a-f]{6}$/;
var TableHeader = /** @class */ (function () {
    function TableHeader(backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.content = new index_1.ContentNode('tableHeader');
        if (backgroundColor) {
            if (!colorPattern.test(backgroundColor)) {
                throw new Error("Color " + backgroundColor + " does not match ^#[0-9a-f]{6}$");
            }
        }
    }
    TableHeader.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    TableHeader.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    TableHeader.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    TableHeader.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    TableHeader.prototype.panel = function (panelType) {
        return this.content.add(new panel_1.Panel(panelType));
    };
    TableHeader.prototype.blockQuote = function () {
        return this.content.add(new block_quote_1.BlockQuote());
    };
    TableHeader.prototype.rule = function () {
        return this.content.add(new rule_1.Rule());
    };
    TableHeader.prototype.mediaGroup = function () {
        return this.content.add(new media_group_1.MediaGroup());
    };
    TableHeader.prototype.applicationCard = function (title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    };
    TableHeader.prototype.decisionList = function (localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    };
    TableHeader.prototype.taskList = function (localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    };
    TableHeader.prototype.codeBlock = function (language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    };
    TableHeader.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                background: this.backgroundColor
            } });
    };
    return TableHeader;
}());
exports.TableHeader = TableHeader;
//# sourceMappingURL=table-header.js.map

/***/ }),

/***/ 659:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var media_1 = __webpack_require__(371);
var MediaSingle = /** @class */ (function (_super) {
    __extends(MediaSingle, _super);
    function MediaSingle(layout) {
        var _this = _super.call(this) || this;
        //private layout: MediaSingleLayout;
        _this.content = new index_1.ContentNode('mediaGroup');
        return _this;
        //this.layout = layout || 'wrap-right';
    }
    MediaSingle.prototype.file = function (attr) {
        this.content.add(new media_1.Media(attr));
        return this;
    };
    MediaSingle.prototype.external = function (attr) {
        this.content.add(new media_1.Media(attr));
        return this;
    };
    MediaSingle.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return MediaSingle;
}(index_1.TopLevelNode));
exports.MediaSingle = MediaSingle;
//# sourceMappingURL=media-single.js.map

/***/ }),

/***/ 711:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mark = /** @class */ (function () {
    function Mark(type) {
        this.type = type;
    }
    Mark.prototype.toJSON = function () {
        return {
            type: this.type
        };
    };
    return Mark;
}());
exports.Mark = Mark;
//# sourceMappingURL=mark.js.map

/***/ }),

/***/ 802:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodes_1 = __webpack_require__(492);
var application_card_1 = __webpack_require__(451);
var block_quote_1 = __webpack_require__(893);
var bullet_list_1 = __webpack_require__(849);
var code_block_1 = __webpack_require__(561);
var decision_list_1 = __webpack_require__(198);
var heading_1 = __webpack_require__(366);
var media_group_1 = __webpack_require__(823);
var ordered_list_1 = __webpack_require__(982);
var panel_1 = __webpack_require__(270);
var paragraph_1 = __webpack_require__(147);
var rule_1 = __webpack_require__(223);
var table_1 = __webpack_require__(263);
var task_list_1 = __webpack_require__(976);
var media_single_1 = __webpack_require__(659);
var Document = /** @class */ (function () {
    function Document(attrs) {
        if (attrs === void 0) { attrs = { version: 1 }; }
        this.attrs = attrs;
        this.content = new nodes_1.ContentNode('doc');
    }
    Document.prototype.applicationCard = function (title, text) {
        return this.content.add(new application_card_1.ApplicationCard(title, text));
    };
    Document.prototype.blockQuote = function () {
        return this.content.add(new block_quote_1.BlockQuote());
    };
    Document.prototype.bulletList = function () {
        return this.content.add(new bullet_list_1.BulletList());
    };
    Document.prototype.codeBlock = function (language) {
        return this.content.add(new code_block_1.CodeBlock(language));
    };
    Document.prototype.decisionList = function (localId) {
        return this.content.add(new decision_list_1.DecisionList(localId));
    };
    Document.prototype.heading = function (level) {
        return this.content.add(new heading_1.Heading(level));
    };
    Document.prototype.textHeading = function (level, text) {
        return this.content.add(new heading_1.Heading(level).text(text));
    };
    Document.prototype.mediaGroup = function () {
        return this.content.add(new media_group_1.MediaGroup());
    };
    Document.prototype.mediaSingle = function () {
        return this.content.add(new media_single_1.MediaSingle());
    };
    Document.prototype.orderedList = function () {
        return this.content.add(new ordered_list_1.OrderedList());
    };
    Document.prototype.panel = function (type) {
        return this.content.add(new panel_1.Panel(type));
    };
    Document.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    Document.prototype.rule = function () {
        this.content.add(new rule_1.Rule());
        return this;
    };
    Document.prototype.table = function () {
        return this.content.add(new table_1.Table());
    };
    Document.prototype.taskList = function (localId) {
        return this.content.add(new task_list_1.TaskList(localId));
    };
    Document.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { version: this.attrs.version });
    };
    Document.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __unusedexports, __webpack_require__) {

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
const { marks, Text }	= __webpack_require__( 286 )


/**
 * Parse a string character per character to find emphasis patterns
 *  This is a very "manual" way to do it, but it provides the most efficient result
 * @param parentNode			{Node}		ADF Node to attach the suite of Text node to
 * @param textToEmphasis		{String}	text to parse for emphasis parsing
 */
function attachTextToNodeSliceEmphasis( parentNode, textToEmphasis ){
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
        const textNode = new Text( text,
          convertDecorationLevelToMark( currentDecorationLevel, strikedThrough ) )
        parentNode.content.add( textNode )
      }

      expressionBuffer = ''
      strikedThrough = !strikedThrough
    }


    if( lineUnderscored[ currentCharacterIndex ] === '_' ){
      let decorationToUse = convertDecorationLevelToMark( currentDecorationLevel, strikedThrough )
			
			if( expressionBuffer !== '' ){
				const textNode = new Text( expressionBuffer, decorationToUse )
				parentNode.content.add( textNode )
				// textWithInline( parentNode, expressionBuffer, decorationToUse )
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
		const textNode = new Text( expressionBuffer, convertDecorationLevelToMark( currentDecorationLevel, strikedThrough ) )
		parentNode.content.add( textNode )
	}
}

/**
 * Convert a "decoration level" (bit swap) to an actual ADF Mark for the text
 *
 * @param decorationLevelToConvert	{Number}		decoration level follow the convention:
 * 														0 => no decoration
 * 														1 => italic
 * 														2 => bold
 * 														3 => bold and italic
 * @param addStrikethrough			{Boolean}		is strikethrough active?
 */
function convertDecorationLevelToMark( decorationLevelToConvert, addStrikethrough ){
	if( addStrikethrough )
		return decorationLevelToConvert === 1
			   ? marks().strike().em()
			   : decorationLevelToConvert === 2
				 ? marks().strike().strong()
				 : decorationLevelToConvert === 3
				   ? marks().strike().strong().em()
				   : marks().strike()
	
	return decorationLevelToConvert === 1
		   ? marks().em()
		   : decorationLevelToConvert === 2
			 ? marks().strong()
			 : decorationLevelToConvert === 3
			   ? marks().strong().em()
			   : null
}

module.exports = attachTextToNodeSliceEmphasis


/***/ }),

/***/ 812:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __webpack_require__(620);
var code_1 = __webpack_require__(601);
var em_1 = __webpack_require__(400);
var link_1 = __webpack_require__(206);
var strike_1 = __webpack_require__(103);
var strong_1 = __webpack_require__(192);
var subsup_1 = __webpack_require__(396);
var text_color_1 = __webpack_require__(936);
var underline_1 = __webpack_require__(294);
function marks() {
    return new Marks();
}
exports.marks = marks;
var Marks = /** @class */ (function () {
    function Marks() {
        this.marks = [];
    }
    Marks.prototype.code = function () {
        return this.add(new code_1.Code());
    };
    Marks.prototype.em = function () {
        return this.add(new em_1.Em());
    };
    Marks.prototype.link = function (href, title) {
        return this.add(new link_1.Link(href, title));
    };
    Marks.prototype.strike = function () {
        return this.add(new strike_1.Strike());
    };
    Marks.prototype.strong = function () {
        return this.add(new strong_1.Strong());
    };
    Marks.prototype.sub = function () {
        return this.add(new subsup_1.SubSup('sub'));
    };
    Marks.prototype.sup = function () {
        return this.add(new subsup_1.SubSup('sup'));
    };
    Marks.prototype.color = function (color) {
        return this.add(new text_color_1.TextColor(color));
    };
    Marks.prototype.underline = function () {
        return this.add(new underline_1.Underline());
    };
    Marks.prototype.action = function (title, target, actionParameters) {
        return this.add(new action_1.Action(title, target, actionParameters));
    };
    Marks.prototype.toJSON = function () {
        if (this.marks.length === 0) {
            throw new Error('At least one mark is required');
        }
        return this.marks.map(function (mark) { return mark.toJSON(); });
    };
    Marks.prototype.add = function (mark) {
        var existing = this.marks.filter(function (m) { return m.type === mark.type; });
        if (existing.length > 0) {
            throw new Error('A mark type can only be used once');
        }
        this.marks.push(mark);
        return this;
    };
    return Marks;
}());
exports.Marks = Marks;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 823:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var media_1 = __webpack_require__(371);
var MediaGroup = /** @class */ (function (_super) {
    __extends(MediaGroup, _super);
    function MediaGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('mediaGroup');
        return _this;
    }
    MediaGroup.prototype.media = function (attrs) {
        this.content.add(new media_1.Media(attrs));
        return this;
    };
    MediaGroup.prototype.link = function (id, collection) {
        this.content.add(new media_1.Media({ id: id, collection: collection, type: 'link' }));
        return this;
    };
    MediaGroup.prototype.file = function (id, collection) {
        this.content.add(new media_1.Media({ id: id, collection: collection, type: 'file' }));
        return this;
    };
    MediaGroup.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return MediaGroup;
}(index_1.TopLevelNode));
exports.MediaGroup = MediaGroup;
//# sourceMappingURL=media-group.js.map

/***/ }),

/***/ 849:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var list_item_1 = __webpack_require__(566);
var BulletList = /** @class */ (function (_super) {
    __extends(BulletList, _super);
    function BulletList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('bulletList');
        return _this;
    }
    BulletList.prototype.item = function () {
        return this.content.add(new list_item_1.ListItem());
    };
    BulletList.prototype.textItem = function (text, marks) {
        this.item().paragraph().text(text, marks);
        return this;
    };
    BulletList.prototype.linkItem = function (text, href, title) {
        this.item().paragraph().link(text, href, title);
        return this;
    };
    BulletList.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return BulletList;
}(index_1.TopLevelNode));
exports.BulletList = BulletList;
//# sourceMappingURL=bullet-list.js.map

/***/ }),

/***/ 893:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var paragraph_1 = __webpack_require__(147);
var BlockQuote = /** @class */ (function (_super) {
    __extends(BlockQuote, _super);
    function BlockQuote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('blockquote');
        return _this;
    }
    BlockQuote.prototype.paragraph = function () {
        return this.content.add(new paragraph_1.Paragraph());
    };
    BlockQuote.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return BlockQuote;
}(index_1.TopLevelNode));
exports.BlockQuote = BlockQuote;
//# sourceMappingURL=block-quote.js.map

/***/ }),

/***/ 936:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mark_1 = __webpack_require__(711);
var colorPattern = /^#[0-9a-f]{6}$/;
var TextColor = /** @class */ (function (_super) {
    __extends(TextColor, _super);
    function TextColor(color) {
        var _this = _super.call(this, 'textColor') || this;
        _this.color = color;
        if (!colorPattern.test(color)) {
            throw new Error("Color " + color + " does not match ^#[0-9a-f]{6}$");
        }
        return _this;
    }
    TextColor.prototype.toJSON = function () {
        return {
            type: this.type,
            attrs: {
                color: this.color
            }
        };
    };
    return TextColor;
}(mark_1.Mark));
exports.TextColor = TextColor;
//# sourceMappingURL=text-color.js.map

/***/ }),

/***/ 962:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
function mention(id, text) {
    return new Mention(id, text);
}
exports.mention = mention;
var Mention = /** @class */ (function (_super) {
    __extends(Mention, _super);
    function Mention(id, text) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.text = text;
        return _this;
    }
    Mention.prototype.toJSON = function () {
        return {
            type: 'mention',
            attrs: {
                id: this.id,
                text: this.text
            }
        };
    };
    return Mention;
}(index_1.InlineNode));
exports.Mention = Mention;
//# sourceMappingURL=mention.js.map

/***/ }),

/***/ 976:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var task_1 = __webpack_require__(284);
var TaskList = /** @class */ (function (_super) {
    __extends(TaskList, _super);
    function TaskList(localId) {
        var _this = _super.call(this) || this;
        _this.localId = localId;
        _this.content = new index_1.ContentNode('taskList');
        return _this;
    }
    TaskList.prototype.task = function (localId, state) {
        return this.content.add(new task_1.Task(localId, state));
    };
    TaskList.prototype.toJSON = function () {
        return __assign({}, this.content.toJSON(), { attrs: {
                localId: this.localId
            } });
    };
    return TaskList;
}(index_1.TopLevelNode));
exports.TaskList = TaskList;
//# sourceMappingURL=task-list.js.map

/***/ }),

/***/ 982:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(492);
var list_item_1 = __webpack_require__(566);
var OrderedList = /** @class */ (function (_super) {
    __extends(OrderedList, _super);
    function OrderedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = new index_1.ContentNode('orderedList');
        return _this;
    }
    OrderedList.prototype.item = function () {
        return this.content.add(new list_item_1.ListItem());
    };
    OrderedList.prototype.textItem = function (text, marks) {
        this.item().paragraph().text(text, marks);
        return this;
    };
    OrderedList.prototype.linkItem = function (text, href, title) {
        this.item().paragraph().link(text, href, title);
        return this;
    };
    OrderedList.prototype.toJSON = function () {
        return this.content.toJSON();
    };
    return OrderedList;
}(index_1.TopLevelNode));
exports.OrderedList = OrderedList;
//# sourceMappingURL=ordered-list.js.map

/***/ })

/******/ });