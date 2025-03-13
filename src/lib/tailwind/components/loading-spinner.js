const loadingSpinnerComponent = (/** @type {any} */ theme) => ({
	'.loading-spinner': {
		'@apply block h-4 w-4 animate-spin rounded-full border-4 ease-linear': {},
		...Object.keys(theme('colors')).reduce((acc, color) => {
			if (typeof theme(`colors.${color}`) === 'object') {
				// @ts-ignore
				acc[`&.loading-spinner-${color}`] = {
					borderColor: `var(--color-${color}-light)`,
					borderTopColor: `var(--color-${color})`
				};
			}

			return acc;
		}, {})
	}
});

module.exports = loadingSpinnerComponent;
