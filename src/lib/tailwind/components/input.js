const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const inputComponent = (/** @type {(arg0: string) => any} */ theme) => {
	const { base1, foreground, contrast, text } = getBaseColorsFromTheme(theme);

	return {
		'.input': {
			'@apply rounded-lg border-2 p-4 bg-transparent px-8 text-lg font-bold outline-none focus:border-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 focus:invalid:border-pink-500 focus:invalid:ring-pink-500':
				{},
			borderColor: contrast,
			color: text,
			'&::placeholder': {
				color: text,
				opacity: 0.6
			},
			option: {
				padding: '16px',
				color: foreground,
				backgroundColor: base1
			}
		}
	};
};

module.exports = inputComponent;
