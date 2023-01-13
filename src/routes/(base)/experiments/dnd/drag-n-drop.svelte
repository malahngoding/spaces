<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';

	type Item = { id: number; name: string };

	export let items: Item[] = [];
	const flipDurationMs = 300;
	const handleDndConsider = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
	};
	const handleDndFinalize = (e: CustomEvent<DndEvent<Item>>) => {
		items = e.detail.items;
	};
</script>

<section
	class="min-h-[480px] m-8"
	use:dndzone={{
		items,
		flipDurationMs,
		dropTargetStyle: {
			border: `1px solid var(--slate12)`
		}
	}}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div class="card z-50 p-4 m-4" animate:flip={{ duration: flipDurationMs }}>{item.name}</div>
	{/each}
</section>

<style>
	section {
		width: 50%;
		border: 1px solid var(--slate8);
		overflow: scroll;
	}
	.card {
		background-color: var(--slate1);
		border: 1px solid var(--slate12);
	}
</style>
