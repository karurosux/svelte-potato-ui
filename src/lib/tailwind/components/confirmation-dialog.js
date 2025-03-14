const { getBaseColorsFromTheme } = require('./get-base-colors-from-theme');

const confirmationDialogComponent = (/** @type {any} */ theme) => {
	const { background1, contrast } = getBaseColorsFromTheme(theme);
	return {
		'.confirmation-dialog': {
			'@apply bg-transparent': {},
			'.confirmation-dialog-content': {
				'@apply max-w-96 text-center': {},
				backgroundColor: background1,
				color: contrast,
				borderColor: contrast,
				'.confirmation-dialog-body': {
					'@apply mb-8': {}
				},
				'.confirmation-dialog-actions': {
					'@apply  grid grid-cols-2 gap-4': {}
				}
			}
		}
	};
};

module.exports = confirmationDialogComponent;
