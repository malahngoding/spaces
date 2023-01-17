<script lang="ts">
	import { page } from '$app/stores';

	import Logo from '$components/branding/logo.svelte';
	import Menu from '$components/icon/menu.svelte';
	import Login from '$components/icon/login.svelte';
	import Close from '$components/icon/close.svelte';
	let path: string;

	$: path = $page.url.pathname;

	const links = [
		{ title: `Beranda`, url: `/home` },
		{ title: `Berkemah`, url: `/camps` },
		{ title: `Eksperimen`, url: `/experiments` },
		{ title: `Tentang Kami`, url: `/about-us` }
	];

	const connect = { title: `Bergabung`, url: `/auth/connect` };

	let showNav = false;

	function navToggle() {
		showNav = !showNav;
	}

	function closeNav() {
		showNav = false;
	}

	function checkUrlMatch(path:string, slug:string):boolean {
		return  path.startsWith(slug);	
	}
</script>

<nav class="z-10 p-8">
	<div class="inside-left-wrapper">
		<a href={`/`} class="logo" on:click={closeNav}>
			<Logo height="48" width="48" />
		</a>
		<div class="nav-link-wrapper">
			{#each links as link}
				<a class="nav-link" class:active={checkUrlMatch(path, link.url)} href={link.url} on:click={closeNav}
					>{link.title}</a
				>
			{/each}
		</div>
	</div>
	<div class="inside-right-wrapper">
		<!-- <AvatarMenu /> -->
		<a href={connect.url} on:click={closeNav}>
			<div class="connect-button">
				{connect.title}
				<Login />
			</div>
		</a>
	</div>
	<div class="block md:hidden">
		<button on:click={navToggle}>
			{#if showNav === true}
				<Close />
			{:else}
				<Menu />
			{/if}
		</button>
	</div>
</nav>

{#if showNav === true}
	<div class="fixed top-[64px] w-screen z-30 p-4 sheets">
		<div class="flex flex-col p-2">
			{#each links as link}
				<a class="nav-link py-6" href={link.url} on:click={closeNav}>{link.title}</a>
			{/each}
			<br />
			<a href={connect.url} on:click={closeNav}>
				<div class="connect-button">
					{connect.title}
					<Login />
				</div>
			</a>
		</div>
	</div>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 64px;
		width: 100vw;
		border-bottom: 2px solid var(--slate6);
		background-color: var(--slate1);
	}

	.sheets {
		background-color: var(--slate1);
		border-bottom: 2px solid var(--slate6);
	}

	.inside-left-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.logo {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: var(--space-regular);
	}

	.nav-link-wrapper {
		display: none;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: var(--space-regular);
		font-size: var(--font-display);
	}

	.nav-link {
		margin-left: var(--space-regular);
		margin-right: var(--space-regular);
		border-bottom: 2px solid var(--slate8);
	}

	.nav-link.active {
		border-bottom: 2px solid var(--slate12);
	}

	.nav-link:hover {
		border-bottom: 2px solid var(--slate12);
	}

	.inside-right-wrapper {
		display: none;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.connect-button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: var(--slate6);
		border: 2px solid var(--slate8);
		padding: var(--space-half) var(--space-regular);
		font-size: var(--font-display);
	}

	.connect-button:hover {
		cursor: pointer;
		border: 2px solid var(--slate10);
		box-shadow: 4px 4px var(--slate9);
	}
	@media only screen and (min-width: 768px) {
		.nav-link-wrapper {
			display: flex;
		}

		.inside-right-wrapper {
			display: flex;
		}
	}
</style>
