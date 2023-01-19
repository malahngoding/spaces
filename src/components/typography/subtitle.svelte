<script lang="ts">
	export let className: string = '';
</script>

<h3 class="text-xl mb-2 font-bold {className}">
	<slot />
</h3>

<style>
	h3 {
		color: var(--slate12);
		user-select: none;
	}
</style>
