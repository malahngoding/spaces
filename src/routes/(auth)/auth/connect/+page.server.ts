import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';

const register: Action = async ({ request }) => {
	const [form] = await Promise.all([request.formData()]);
	const username = form.get(`username`);
	const password = form.get(`password`);
	const passwordVerification = form.get(`password-verification`);

	if (typeof username !== 'string' || !username) {
		return fail(400, { emptyUsername: true });
	}

	if (typeof password !== 'string' || !password) {
		return fail(400, { emptyPassword: true });
	}

	if (typeof passwordVerification !== 'string' || !passwordVerification) {
		return fail(400, { emptyPasswordVerification: true });
	}

	if (password !== passwordVerification) {
		return fail(400, { invalidPasswordVerfication: true });
	}

	console.log(username, password);

	throw redirect(303, '/auth/connect');
};

export const actions: Actions = { register };
