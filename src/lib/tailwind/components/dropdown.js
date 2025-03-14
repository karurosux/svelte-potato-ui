const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const dropdownComponent = (/** @type {any} */ theme) => {
	const { background1, contrast } = getBaseColorsFromTheme(theme);

	return {
		'.dropdown-menu-wrapper': {
			'@apply relative z-40': {},
			'.dropdown-backdrop': {
				'@apply fixed bottom-0 left-0 right-0 top-0 z-40': {}
			},
			'.dropdown-menu': {
				'@apply absolute z-50 min-w-[250px]': {},
				backgroundColor: background1,
				color: contrast,
				borderColor: contrast,
				'.card-body': {
					'@apply overflow-y-auto': {}
				}
			}
		}
	};
};

module.exports = dropdownComponent;
