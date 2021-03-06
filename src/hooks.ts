import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, resolve }) => {
	// TODO https://github.com/sveltejs/kit/issues/1046
	const response = await resolve({
		...request,
		method: (request.query.get('_method') || request.method).toUpperCase()
	});

	return response;
};
