import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: '5wf3w7bm', //import.meta.env.SANITY_PROJECT_ID
			dataset: 'production', //import.meta.env.SANITY_DATASET
			apiVersion: '2023-02-08', //import.meta.env.SANITY_API_VERSION
			useCdn: false,
		}),
	],
});