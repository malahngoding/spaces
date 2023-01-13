<script>
	import Markdown from '$components/markdown.svelte';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import PrivacyPolicy from './privacy-policy.md';
	import { titleMaker } from '$utils/title-maker';
	import LimitWidth from '$components/wrapper/limit-width.svelte';
	import Paragraph from '$components/typography/paragraph.svelte';

	const updated = `Diperbaharui pada tanggal 25 November 2022`;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Kebijakan Privasi - ${updated}`)}</title>
</svelte:head>

<Section>
	<Subtitle>Kami Menghormati Data Anda</Subtitle>
	<Title>Kebijakan Privasi</Title>
</Section>
<Section>
	<LimitWidth>
		<Markdown>
			<PrivacyPolicy />
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
