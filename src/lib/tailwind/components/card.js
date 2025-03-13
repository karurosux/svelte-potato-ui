/**
 * @param {any} theme
 */
const cardComponent = (theme) => ({
	'.card': {
		'@apply border-2 flex flex-col overflow-hidden rounded-xl': {},
		'.card-header': {
			'@apply  flex items-center p-4': {},
			'.card-title': {}
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
});

module.exports = cardComponent;
