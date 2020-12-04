// Setup environment to simulate a browser
// (mandatory to register Gutenberg blocks).
require( 'browser-env' )();
window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};

const { registerCoreBlocks } = require( '@wordpress/block-library' );
const { createBlock, serialize } = require( '@wordpress/blocks' );

registerCoreBlocks();

const myBlock = createBlock( 'core/paragraph', {
	content: 'This is a block created programmatically',
})

const serializedBlock = serialize( myBlock );

console.log( serializedBlock );
