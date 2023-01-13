<script lang="ts">
	import Paragraph from '$components/typography/paragraph.svelte';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import LimitWidth from '$components/wrapper/limit-width.svelte';
	import Section from '$components/wrapper/section.svelte';
	import { titleMaker } from '$utils/title-maker';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Tanya Kami`)}</title>
</svelte:head>

<Section>
	<Subtitle>Malu bertanya sesat dijalan</Subtitle>
	<Title>Pertanyaan tentang Malah Ngoding</Title>
</Section>

<Section>
	<LimitWidth>
		{#each data.questions as item}
			<Paragraph><span class="font-black">{item.comment}</span></Paragraph>
			<Paragraph>{item.answer}</Paragraph>
		{/each}
	</LimitWidth>
</Section>

<br />
