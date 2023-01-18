<script lang="ts">
	import { titleMaker } from '$utils/title-maker';
	import Card from './card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Beranda`)}</title>
</svelte:head>

<div class="timeline-wrapper">
	{#each data.post as item, index}
		<Card timestamp={item.date} message={item.message} />
	{/each}
	<div class="separator">
		<p class="text-sm underline">Akhir dari sejarah</p>
	</div>
</div>

<style>
	.separator {
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 120px;
	}
</style>
