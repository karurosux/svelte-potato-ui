export const getBaseColorsFromTheme = (theme) => {
	const base1 = theme('colors.base1');
	const base2 = theme('colors.base2');
	const base3 = theme('colors.base3');
	const baseContrast = theme('colors.baseContrast');
	const baseText = theme('colors.baseText');

	const background1 = base1 || theme('colors.black');
	const background2 = base2 || theme('colors.white');
	const background3 = base3 || theme('colors.gray.200');
	const contrast = baseContrast || theme('colors.white');
	const text = baseText || theme('colors.white');

	return {
		background1,
		background2,
		background3,
		contrast,
		text
	};
};
