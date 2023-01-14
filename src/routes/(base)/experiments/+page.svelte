<script lang="ts">
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import { titleMaker } from '$utils/title-maker';
	import Card from './card.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Bereksperimen`)}</title>
</svelte:head>

<Section>
	<Subtitle>Mencoba Gagal dan Berhasil</Subtitle>
	<Title>Malah Ngoding Labs</Title>
</Section>

<Section>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
		{#each data.experiments as item}
			<Card title={item.title} excerpt={item.excerpt} image={item.image} link={item.link} />
		{/each}
	</div>
</Section>

<br />
