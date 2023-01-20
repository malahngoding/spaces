import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { giveNumberFromTo } from '$utils/random';

export const GET = (async ({ url }) => {
	const min = Number(url.searchParams.get('min') ?? '1');
	const max = Number(url.searchParams.get('max') ?? '100');

	const d = max - min;

	if (isNaN(d) || d < 0) {
		throw error(400, 'min and max must be numbers, and min must be less than max');
	}

	const random = giveNumberFromTo(min, max);
	return json({ number: random, });
}) satisfies RequestHandler;
