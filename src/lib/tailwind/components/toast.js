const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const toastComponent = (/** @type {any} */ theme) => {
	const { base1, text, foreground } = getBaseColorsFromTheme(theme);
	return {
		'.toast-container': {
			'@apply fixed grid grid-cols-1 gap-8 z-50': {},
			'&.toast-container-left-top': {
				'@apply left-8 right-auto top-8': {}
			},
			'&.toast-container-right-top': {
				'@apply left-auto right-8 top-8': {}
			},
			'&.toast-container-left-bottom': {
				'@apply left-8 right-auto bottom-8': {}
			},
			'&.toast-container-right-bottom': {
				'@apply left-auto right-8 bottom-8': {}
			},
			'.toast-instance': {
				'@apply flex min-w-[200px] max-w-[500px] items-center justify-center rounded-lg border-2 p-8 shadow-lg':
					{},
				backgroundColor: base1,
				color: text,
				borderColor: foreground,

				...Object.keys(theme('colors')).reduce((acc, color) => {
					if (typeof theme(`colors.${color}`) === 'object') {
						// @ts-ignore
						acc[`&.toast-${color}`] = {
							backgroundColor: `var(--color-${color})`,
							color: `var(--color-${color}-contrast)`,
							borderColor: `var(--color-${color}-light)`
						};
					}
					return acc;
				}, {})
			}
		}
	};
};

module.exports = toastComponent;
