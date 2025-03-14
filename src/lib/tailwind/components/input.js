const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const inputComponent = (/** @type {(arg0: string) => any} */ theme) => {
	const { background1, contrast } = getBaseColorsFromTheme(theme);

	return {
		'.input': {
			'@apply rounded-lg border-2 p-4 bg-transparent px-8 text-lg font-bold outline-none focus:border-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500':
				{},
			borderColor: contrast,
			color: contrast,
			'&::placeholder': {
				color: contrast,
				opacity: 0.6
			},
			option: {
				padding: '16px',
				color: contrast,
				backgroundColor: background1
			}
		}
	};
};

module.exports = inputComponent;
