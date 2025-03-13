const plugin = require('tailwindcss/plugin');
const generateColorVariables = require('./components/colors');
const buttonComponent = require('./components/button');
const cardComponent = require('./components/card');
const loadingSpinnerComponent = require('./components/loading-spinner');
const tableComponent = require('./components/table');
const tabsComponent = require('./components/tabs');
const inputComponent = require('./components/input');
const toastComponent = require('./components/toast');
const dropdownComponent = require('./components/dropdown');
const defaultColors = require('./components/default-colors');

// @ts-ignore
module.exports = plugin(
	/** @type {import('tailwindcss').Config} */
	function ({ addBase, addComponents, theme }) {
		addBase({
			// @ts-ignore
			':root': generateColorVariables(theme)
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
			...defaultColors(theme)
		});
	}
);
