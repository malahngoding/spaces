import { fail, redirect } from '@sveltejs/kit';
import type { Actions, Action } from './$types';

const login: Action = async ({ cookies, request }) => {
	const [form] = await Promise.all([request.formData()]);
	const username = form.get(`username`);
	const password = form.get(`password`);

	if (typeof username !== 'string' || !username) {
		return fail(400, { emptyUsername: true });
	}

	if (typeof password !== 'string' || !password) {
		return fail(400, { emptyPassword: true });
	}

	const code = 'SUCCESS';
	const token = 'OK';

	if (code === 'SUCCESS') {
		cookies.set('instead_session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30
		});
	} else {
		console.log('kesini harusnya');
		return fail(400, { emptyPassword: true });
	}

	throw redirect(303, '/auth/login');
};

export const actions: Actions = { login };
