const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme.js');

/**
 * @param {any} theme
 */
const cardComponent = (theme) => {
	const { foreground, foregroundText, text } = getBaseColorsFromTheme(theme);
	return {
		'.card': {
			'@apply border-2 flex flex-col overflow-hidden rounded-xl': {},
			borderColor: foreground,
			color: text,
			'.card-header': {
				'@apply  flex items-center p-4': {},
				backgroundColor: foreground,
				color: foregroundText,
				'.card-title': {
					color: foregroundText,
					'*': {
						color: foregroundText
					}
				}
			},
			'.card-body': {
				'@apply  relative flex-1 p-4': {}
			},

			...Object.keys(theme('colors')).reduce((acc, color) => {
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.card-${color}`] = {
						borderColor: `var(--color-${color})`,
						'.card-header': {
							backgroundColor: `var(--color-${color})`,
							color: `var(--color-${color}-contrast)`,
							'.card-title': {
								color: `var(--color-${color}-contrast)`
							}
						}
					};
				}
				return acc;
			}, {})
		}
	};
};

module.exports = cardComponent;
