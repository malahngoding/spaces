<script lang="ts">
	import '$styles/reset.css';
	import '$styles/main.css';
	import Theme from '$components/theme.svelte';
	import Footer from '$components/navigations/footer.svelte';
	import Nav from '$components/navigations/nav.svelte';
</script>

<Theme />
<Nav />
<div class="push" />
<main>
	<slot />
</main>
<Footer />

<style>
	.push {
		height: 64px;
	}
	main {
		background-color: var(--slate1);
	}
</style>
