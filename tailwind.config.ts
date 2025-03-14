import typography from '@tailwindcss/typography';
import colorsPlugin from './src/lib/tailwind/plugin';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				base1: `var(--base-1)`,
				base2: `var(--base-2)`,
				base3: `var(--base-3)`,
				baseContrast: `var(--base-contrast)`,
				baseText: 'var(--base-text)',
				primary: colors.purple,
				secondary: colors.amber
			}
		}
	},
	plugins: [typography, colorsPlugin]
} satisfies Config;
