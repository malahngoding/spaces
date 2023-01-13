<script>
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import { titleMaker } from '$utils/title-maker';
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Pergi Berkemah`)}</title>
</svelte:head>

<Section>
	<Subtitle>Mendaki Gunung, Melewati Lembah</Subtitle>
	<Title>Berkemah Bersama Kami</Title>
</Section>
