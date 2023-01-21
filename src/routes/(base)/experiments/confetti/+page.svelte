<script lang="ts">
	import { titleMaker } from '$utils/title-maker';
	import { confetti } from '@neoconfetti/svelte';
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Confetti Happy`)}</title>
</svelte:head>

<div use:confetti={{ stageWidth: 500, stageHeight: 200 }} />
