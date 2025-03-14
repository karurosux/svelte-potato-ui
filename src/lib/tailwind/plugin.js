const plugin = require('tailwindcss/plugin');
const { getBaseColorsFromTheme } = require('./components/get-base-colors-from-theme');
const generateColorVariables = require('./components/colors');
const buttonComponent = require('./components/button');
const cardComponent = require('./components/card');
const loadingSpinnerComponent = require('./components/loading-spinner');
const tableComponent = require('./components/table');
const tabsComponent = require('./components/tabs');
const inputComponent = require('./components/input');
const toastComponent = require('./components/toast');
const dropdownComponent = require('./components/dropdown');
const confirmationDialogComponent = require('./components/confirmation-dialog');
const switchComponent = require('./components/switch');
const autocompleteComponent = require('./components/autocomplete');
const alertComponent = require('./components/alert');

// @ts-ignore
module.exports = plugin(
	/** @type {import('tailwindcss').Config} */
	function ({ addBase, addComponents, theme }) {
		const { background1, text } = getBaseColorsFromTheme(theme);

		addBase({
			// @ts-ignore
			':root': {
				backgroundColor: background1,
				color: text,
				'*': {
					color: text
				},
				...generateColorVariables(theme)
			}
		});

		addComponents({
			...buttonComponent(theme),
			...cardComponent(theme),
			...loadingSpinnerComponent(theme),
			...tableComponent(theme),
			...tabsComponent(theme),
			...inputComponent(theme),
			...toastComponent(theme),
			...dropdownComponent(theme),
			...confirmationDialogComponent(theme),
			...switchComponent(theme),
			...autocompleteComponent(theme),
			...alertComponent(theme)
		});
	}
);
