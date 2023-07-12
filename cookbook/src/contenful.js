import * as contentful from 'contentful';

const client = contentful.createClient({
	space: import.meta.env.VITE_SPACE_ID,
	environment: import.meta.env.VITE_ENVIRONMENT_NAME, // defaults to 'master' if not set
	accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export {client};