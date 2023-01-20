import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
		port: 3500
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$components: path.resolve('./src/components'),
			$config: path.resolve('./src/config'),
			$services: path.resolve('./src/services'),
			$styles: path.resolve('./src/styles'),
			$utils: path.resolve('./src/utils')
		}
	}
};

export default config;
