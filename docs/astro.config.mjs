// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://compass.wilkin.xyz',
	integrations: [
		starlight({
			title: 'Compass Docs',
			social: {
				github: 'https://github.com/leowilkin/compass',
			},
			editLink: {
				baseUrl: 'https://github.com/leowilkin/compass/edit/main/docs/',
			  },
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
