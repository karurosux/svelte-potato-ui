const inputComponent = (/** @type {(arg0: string) => any} */ theme) => ({
	'.input': {
		'@apply rounded-lg border-2 p-4 bg-transparent px-8 text-lg font-bold outline-none focus:border-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500':
			{}
	}
});

module.exports = inputComponent;
