<script lang="ts">
	import { page } from '$app/stores';
	import '$styles/reset.css';
	import '$styles/main.css';
	import Theme from '$components/theme.svelte';
	import Activation from '$components/branding/activation.svelte';
	import Home from '$components/icon/home.svelte';
	import Close from '$components/icon/close.svelte';
	// import Camps from '$components/icon/camps.svelte';
	// import Experiments from '$components/icon/experiments.svelte';
	// import About from '$components/icon/about.svelte';

	let path: string;

	$: path = $page.url.pathname;

	const links = [
		{ title: `Beranda`, url: `/home`, icon: Home },
		// { title: `Berkemah`, url: `/camps`, icon: Camps },
		// { title: `Eksperimen`, url: `/experiments`, icon: Experiments },
		// { title: `Tentang Kami`, url: `/about-us`, icon: About }
		{ title: `Kembali`, url: `/`, icon:  Close}
	];
</script>

<Theme />
<Activation />

<div class="flex flex-row">
	<aside class="w-[64px] md:w-[256px] fixed top-0 left-0 h-screen z-10">
		<div class="flex flex-col justify-center items-center md:items-start p-0 md:p-4">
			{#each links as link}
				<a class="font-black p-4 w-full linkie" class:active={path === link.url} href={link.url}>
					<span class="hidden md:block">{link.title}</span>
					<span class="md:hidden flex flex-col justify-center items-center">
						<svelte:component this={link.icon} />
					</span>
				</a>
			{/each}
		</div>
	</aside>
	<div class="flex-1 ml-[64px] md:ml-[256px] max-w-[480px]">
		<slot />
	</div>
</div>

<style>
	aside {
		border-right: 1px solid var(--slate6);
	}
	.linkie.active {
		background-color: var(--slate6);
	}
</style>
