import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const res = [
		{
			comment: 'Apa itu MALAHNGODING?',
			answer:
				'MALAHNGODING merupakan platform pembelajaran praktis untuk para pengembang aplikasi web dan mobile, kami berharap platform ini bisa menjadi media untuk membantu sobat MALAHNGODING belajar dan mengembangkan diri.'
		},
		{
			comment: 'Berapa biaya untuk mulai MALAHNGODING?',
			answer:
				'Konten MALAHNGODING adalah gratis. Pembiayaan MALAHNGODING saat masa pengembangan ini bersifat sukarela.'
		},
		{
			comment: 'Bagaimana bekerja sama dengan MALAHNGODING?',
			answer:
				'Untuk bentuk kerjasama dalam layanan MALAHNGODING yang lain akan berlaku sesuai kontrak untuk masing - masing perjanjian yang akan dibuat.'
		}
	];
	return {
		questions: res
	};
};
