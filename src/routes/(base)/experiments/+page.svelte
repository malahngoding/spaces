<script>
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import { titleMaker } from '$utils/title-maker';
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
