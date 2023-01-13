import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = [
		{ date: '1 Januari 2023', message: 'Selamat Tahun Baru! Teman - teman malah ngoding' },
		{ date: '30 Desember 2022', message: 'Tahun baruan tetap semangat ngoding' },
		{ date: '25 Desember 2022', message: 'Selamat Hari Natal' },
		{ date: '14 Desember 2022', message: 'Hello World!' }
	];
	return {
		post: data
	};
};
