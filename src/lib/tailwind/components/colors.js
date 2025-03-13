/**
 * @param {any} theme
 */
const generateColorVariables = (theme) => {
	const variables = {};

	// Default/white variant
	variables['--color-white'] = theme('colors.white');
	variables['--color-white-light'] = theme('colors.gray.200');
	variables['--color-white-dark'] = theme('colors.gray.300');
	variables['--color-white-contrast'] = theme('colors.gray.900');

	// Process each color in the Tailwind palette
	Object.entries(theme('colors')).forEach(([colorName, colorShades]) => {
		// Skip special colors like inherit, current, transparent, etc.
		if (typeof colorShades === 'object') {
			// @ts-ignore
			variables[`--color-${colorName}`] =
				colorShades[500] || colorShades[400] || Object.values(colorShades)[4];
			// @ts-ignore
			variables[`--color-${colorName}-light`] =
				colorShades[300] || colorShades[200] || Object.values(colorShades)[2];
			// @ts-ignore
			variables[`--color-${colorName}-dark`] =
				colorShades[700] || colorShades[600] || Object.values(colorShades)[6];
			// @ts-ignore
			variables[`--color-${colorName}-contrast`] = '#ffffff';
		}
	});

	return variables;
};

module.exports = generateColorVariables;
