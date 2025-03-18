const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const tableComponent = (/** @type {any} */ theme) => {
	const { text, foreground } = getBaseColorsFromTheme(theme);
	return {
		'.table': {
			'@apply w-full overflow-hidden': {},
			'.table-header': {
				'@apply rounded-t-2xl text-left font-bold uppercase': {},
				'.table-header-cell': {
					'@apply px-4 py-2': {}
				},
				'.table-header-row': {
					'@apply border-b-2': {},
					borderColor: foreground,
					color: text,
					'.table-header-cell': {
						color: text
					}
				}
			},
			'.table-row': {
				'@apply border-b-2 last:border-b-0': {},
				borderColor: foreground,
				'.table-row-cell': {
					'@apply px-4 py-4': {},
					color: text
				}
			},

			...Object.keys(theme('colors')).reduce((acc, color) => {
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.table-${color}`] = {
						'@apply w-full overflow-hidden': {},
						'.table-header': {
							'.table-header-row': {
								borderColor: `var(--color-${color})`,
								'.table-header-cell': {
									color: `var(--color-${color})`
								}
							}
						},
						'.table-row': {
							'@apply border-b-2 last:border-b-0': {},
							borderColor: `var(--color-${color})`,
							'.table-row-cell': {
								color: `var(--color-${color})`
							}
						}
					};
				}
				return acc;
			}, {})
		}
	};
};

module.exports = tableComponent;
