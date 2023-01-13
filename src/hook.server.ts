import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

const cookieHandler: Handle = async ({ event, resolve }) => {
	const insteadId = event.cookies.get('instead_id');
	const response = await resolve(event);
	response.headers.set('x-custom-header', 'Instead');
	if (insteadId === undefined) {
		response.headers.set('Set-Cookie', cookie.serialize('instead_id', uuid()));
	}
	return response;
};

export const handle: Handle = sequence(cookieHandler);
