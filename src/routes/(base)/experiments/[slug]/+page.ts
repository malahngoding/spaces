import { error } from '@sveltejs/kit';
import { breadAndButter } from '../data';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	console.log(breadAndButter);
	console.log(params.slug.replace('/experiments', ''));
	const filter = breadAndButter.filter(
		(item) => item.link.replace('/experiments', '') === params.slug
	);

	return {
		title: 'Hello world!',
		content: filter
	};

	throw error(404, 'Not found');
}) satisfies PageLoad;
