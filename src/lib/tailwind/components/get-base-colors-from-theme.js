export const getBaseColorsFromTheme = (/** @type {(arg0: string) => any} */ theme) => {
	const cbase1 = theme('colors.base1');
	const cbase2 = theme('colors.base2');
	const cbase3 = theme('colors.base3');
	const cbaseContrast = theme('colors.baseContrast');
	const cbaseText = theme('colors.baseText');
	const cbaseTextInverse = theme('colors.baseTextInverse');
	const cforeground = theme('colors.foreground');
	const cforegroundText = theme('colors.foregroundText');

	const base1 = cbase1 || theme('colors.black');
	const base2 = cbase2 || theme('colors.white');
	const base3 = cbase3 || theme('colors.gray.200');
	const contrast = cbaseContrast || theme('colors.white');
	const text = cbaseText || theme('colors.white');
	const textInverse = cbaseTextInverse || theme('colors.black');
	const foreground = cforeground || theme('colors.white');
	const foregroundText = cforegroundText || theme('colors.black');

	return {
		base1,
		base2,
		base3,
		contrast,
		text,
		textInverse,
		foreground,
		foregroundText
	};
};
