import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ request, render }) => {
	// TODO https://github.com/sveltejs/kit/issues/1046
	const response = await render({
		...request,
		method: (request.query.get('_method') || request.method).toUpperCase()
	});

	return response;
};
