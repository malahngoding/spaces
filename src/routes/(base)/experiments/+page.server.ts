import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	const res = [
		{
			link: '/experiments',
			image:
				'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
			title: 'Mensimulasikan Internet Lambat Dengan Chrome Developer Tools',
			excerpt:
				'Test how your website or app works for users with a slow internet connection, or when the connection drops.'
		},
		{
			link: '/experiments',
			image:
				'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
			title: 'Mengurutkan Array dari Objects Berdasarkan Nilai Dari Property-nya pada Javascript',
			excerpt:
				'Imagine that you have an array of objects and want to order them depending on the value of a specific property in the objects.'
		},
		{
			link: '/experiments',
			image:
				'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
			title: 'Menunjukan Sejauh Mana Scroll User Dengan JavaScript',
			excerpt:
				'You can easily find out how far down on the page the user has scrolled by checking the window or document object.'
		},
		{
			link: '/experiments',
			image:
				'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
			title: 'Memberikan Styling Pada console.log() Kalian',
			excerpt:
				'When you’re logging a lot of stuff in the console it can be really handy (and fun) to style your messages. Let’s have a look at how.'
		}
	];
	return {
		experiments: res
	};
}) satisfies PageServerLoad;
