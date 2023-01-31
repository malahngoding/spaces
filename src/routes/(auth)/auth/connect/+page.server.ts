import { fail, redirect } from '@sveltejs/kit';
import type { Action, Actions } from './$types';

const register: Action = async ({ request }) => {
	const [form] = await Promise.all([request.formData()]);
	const username = form.get(`username`);
	const email = form.get(`email`);
	const password = form.get(`password`);

	if (
		typeof username !== 'string' ||
		!username ||
		typeof email !== 'string' ||
		!email ||
		typeof password !== 'string' ||
		!password
	) {
		return fail(400, { emptyUsername: true, emptyEmail: true, emptyPassword: true });
	}

	const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
	if (!regex.test(email)) {
		return fail(400, { invalidEmail: true });
	}

	throw redirect(303, '/auth/connect');
};

export const actions: Actions = { register };
