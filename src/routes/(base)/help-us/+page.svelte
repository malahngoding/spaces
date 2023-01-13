<script>
	import Markdown from '$components/markdown.svelte';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import LimitWidth from '$components/wrapper/limit-width.svelte';
	import Section from '$components/wrapper/section.svelte';
	import { titleMaker } from '$utils/title-maker';

	import HelpUs from './help-us.svx';
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Pergi Berkemah`)}</title>
</svelte:head>

<Section>
	<Subtitle>Terima Kasih Atas Partisipasinya</Subtitle>
	<Title>Bantu Kami</Title>
</Section>

<Section>
	<LimitWidth>
		<Markdown>
			<HelpUs />
		</Markdown>
	</LimitWidth>
</Section>
