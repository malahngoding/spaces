<script>
	import themeStore from '$config/theme';
</script>

<select bind:value={$themeStore.theme}>
	<option value="dark">Mode Gelap</option>
	<option value="light">Mode Cerah</option>
	<option value="system">Sistem</option>
</select>

<style>
	select {
		background-color: var(--slate6);
		padding: var(--space-half) var(--space-regular);
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		-o-appearance: none;
		appearance: none;
	}

	select option {
		font-size: var(--font-display);
	}
</style>
