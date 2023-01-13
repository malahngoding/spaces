<script>
	import Markdown from '$components/markdown.svelte';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import TermsAndCondition from './terms-and-condition.md';
	import { titleMaker } from '$utils/title-maker';
	import LimitWidth from '$components/wrapper/limit-width.svelte';
	import Paragraph from '$components/typography/paragraph.svelte';

	const updated = `Diperbaharui pada tanggal 25 November 2022`;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Syarat dan Ketentuan - ${updated}`)}</title>
</svelte:head>

<Section>
	<Subtitle>Batasan Penggunaan Platform</Subtitle>
	<Title>Syarat dan Ketentuan</Title>
</Section>
<Section>
	<LimitWidth>
		<Markdown>
			<TermsAndCondition />
		</Markdown>
	</LimitWidth>
</Section>
<Section>
	<Paragraph>{updated}</Paragraph>
	<div class="break" />
</Section>

<style>
	.break {
		height: var(--space-double);
	}
</style>
