const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const autocompleteComponent = (/** @type {any} */ theme) => {
	const { base1, text, foreground } = getBaseColorsFromTheme(theme);
	return {
		'.autocomplete-wrapper': {
			'@apply relative h-auto': {},
			'.autocomplete-backdrop': {
				'@apply fixed left-0 top-0 bottom-0 right-0 z-20 h-full w-full': {}
			},
			'.autocomplete-input': {
				'@apply z-50 w-full': {}
			},
			'.autocomplete-selection': {
				'@apply absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center gap-2 px-4': {},
				'.autocomplete-selection-clear *': {
					color: foreground,
					stroke: foreground
				}
			},
			'.autocomplete-popover': {
				'@apply absolute top-20 z-50 min-h-20 w-full min-w-[250px]': {},
				backgroundColor: base1,
				color: text,
				borderColor: foreground,
				'.autocomplete-popover-item': {
					'@apply  flex w-full select-none items-center gap-2 border-b-2 p-4 text-left uppercase last:border-none hover:font-bold':
						{},
					borderColor: foreground
				}
			}
		}
	};
};

module.exports = autocompleteComponent;
