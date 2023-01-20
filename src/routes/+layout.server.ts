import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		posts: 'ok'
	};
}) satisfies LayoutServerLoad;
