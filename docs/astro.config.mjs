// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://myday.wilkin.xyz',
	integrations: [
		starlight({
			title: 'myDay Docs',
			social: {
				github: 'https://github.com/leowilkin/myday',
			},
			editLink: {
				baseUrl: 'https://github.com/leowilkin/myday/edit/main/docs/',
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
