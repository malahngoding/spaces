<script lang="ts">
	import { titleMaker } from '$utils/title-maker';
	import Hero from './hero.svelte';
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Hello World`)}</title>
</svelte:head>

<Hero title="Hello World, Selamat Datang di" subTitle="Dunia Malah Ngoding 🌐" />
