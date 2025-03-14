const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const tabsComponent = (/** @type {any} */ theme) => {
	const { background1, background2, contrast } = getBaseColorsFromTheme(theme);
	return {
		'.tabs-wrapper': {
			'@apply flex h-full w-full flex-col': {},
			'.tabs': {
				'@apply flex w-full overflow-hidden border-b-2': {},
				'.tab': {
					'@apply flex flex-1 cursor-pointer select-none items-center justify-center border-r-2 p-4 text-center font-bold uppercase [&.selected]:opacity-100 opacity-85 last:border-0 disabled:opacity-65':
						{},
					color: background1,
					backgroundColor: contrast,
					borderColor: background2
				}
			},

			...Object.keys(theme('colors')).reduce((acc, color) => {
				if (typeof theme(`colors.${color}`) === 'object') {
					// @ts-ignore
					acc[`&.tabs-${color}`] = {
						'.tabs': {
							borderColor: `var(--color-${color})`,
							'.tab': {
								color: `var(--color-${color}-contrast)`,
								backgroundColor: `var(--color-${color})`,
								borderColor: `var(--color-${color}-light)`,
								'&.selected': {
									backgroundColor: theme(`colors.${color}.800`)
								},
								'&:hover': {
									backgroundColor: `var(--color-${color}-light)`
								}
							}
						}
					};
				}
				return acc;
			}, {})
		}
	};
};

module.exports = tabsComponent;
