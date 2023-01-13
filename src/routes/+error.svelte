<script lang="ts">
	import '$styles/reset.css';
	import '$styles/main.css';
	import Theme from '$components/theme.svelte';
	const flip = `(╯°□°）╯︵ ┻━┻`;
</script>

<Theme />
<div>
	<h1 class="bold">404 - Halaman Tidak Ditemukan</h1>
	<h1>{flip}</h1>
	<a href="/">silahkan kembali ke halaman awal</a>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: var(--space-double);
	}
	h1 {
		text-align: center;
		font-size: var(--font-xl);
		margin-bottom: var(--space-double);
	}
	.bold {
		font-weight: 900;
	}
	a {
		margin-top: var(--space-regular);
		text-decoration: underline;
	}
</style>
