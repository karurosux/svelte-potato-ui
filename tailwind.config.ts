import typography from '@tailwindcss/typography';
import colorsPlugin from './src/lib/tailwind/plugin';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [typography, colorsPlugin]
} satisfies Config;
