import type { PageServerLoad } from './$types';
import { breadAndButter } from './data';

export const prerender = true;

export const load = (async () => {
	return {
		experiments: breadAndButter
	};
}) satisfies PageServerLoad;
