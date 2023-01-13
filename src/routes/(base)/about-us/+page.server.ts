import type { PageServerLoad } from './$types';
import { commentsDB } from '$utils/db';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const res = await commentsDB.fetch({ lang: 'id' });
	return {
		questions: res.items
	};
};
