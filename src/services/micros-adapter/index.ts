import wretch from 'wretch';

export const micros = wretch('http://localhost:4000', { mode: 'cors' })
	.errorType('json')
	.resolve((r) => r.json());
