<script lang="ts">
	import { page } from '$app/stores';

	import ThemeSwitcher from '$components/settings/theme-switcher.svelte';
	let path: string;

	$: path = $page.url.pathname;

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ url: `https://github.com/malahngoding`, title: `Github` },
		// { url: `https://www.youtube.com/channel/UCKMCYwl48GRxkKP0c92GOJQ`, title: `Youtube` },
		// { url: `https://www.tiktok.com/@malahngoding`, title: `Tiktok` },
		{ url: `https://www.instagram.com/malahngoding/`, title: `Instagram` }
	];

	const necessities = [
		{ url: `/privacy-policy`, title: `Aturan Privasi` },
		{ url: `/terms-and-condition`, title: `Syarat Dan Ketentuan` },
		{ url: `/help-us`, title: `Bantu Kami` },
		{ url: `/faq`, title: `FAQ` }
	];
</script>

<footer>
	<div class="footer-text">
		<h3 class="text-sm">Space adalah proyek open-source yang dikelola oleh tim Malah Ngoding</h3>
		<h3 class="text-sm">©{currentYear} Malah Ngoding. Hak cipta dilindungi undang-undang.</h3>
	</div>
	<div class="social-link-wrapper flex flex-row flex-wrap justify-start items-center">
		{#each socialLinks as socialLink}
			<a
				href={socialLink.url}
				class="social-link flex flex-row justify-center items-center"
				target="_blank"
				rel="noreferrer"
			>
				<span>{socialLink.title}</span>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		{/each}
	</div>
	<ThemeSwitcher />
	<div class="necessities">
		{#each necessities as necessity}
			<a href={necessity.url} class="linkie" class:active={path === necessity.url}>
				{necessity.title}
			</a>
		{/each}
	</div>
	<div class="haiku">
		<p>古池や 蛙飛び込む 水の音</p>
		<p>春の海　ひねもすのたり　のたりかな</p>
		<p>痩蛙　負けるな一茶　是にあり</p>
		<p>菜の花や　月は東に　日は西に</p>
		<p>閑けさや　岩にしみいる　蝉の声</p>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: var(--space-regular) var(--space-double);
		border-top: 2px solid var(--slate6);
		background-color: var(--slate1);
	}
	.footer-text h3 {
		margin-bottom: var(--space-half);
	}

	.social-link-wrapper {
		margin-top: var(--space-double);
		margin-bottom: var(--space-double);
		font-size: var(--font-display);
	}

	.social-link {
		margin-right: var(--space-half);
	}

	.necessities {
		display: flex;
		flex-direction: row;
		margin-top: var(--space-double);
	}

	.necessities a {
		font-size: var(--font-sm);
		margin-right: var(--space-regular);
	}

	.linkie {
		border-bottom: 1px solid var(--slate8);
	}

	.linkie.active {
		border-bottom: 1px solid var(--slate12);
	}

	.linkie:hover {
		border-bottom: 1px solid var(--slate12);
	}

	.haiku {
		margin: var(--space-double) 0;
	}

	.haiku p {
		font-size: var(--font-sm);
	}
</style>
