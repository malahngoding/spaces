<script lang="ts">
	const pageTitle: string = 'Hello World';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<body>
	<nav>Navigation</nav>
	<aside>Side Navigation</aside>
	<main>Main Hello</main>
	<footer>Footman</footer>
</body>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
