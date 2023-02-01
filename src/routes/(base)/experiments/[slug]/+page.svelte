<script lang="ts">
	import { titleMaker } from '$utils/title-maker';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(data.title)}</title>
</svelte:head>

<div>{@html data.content}</div>
