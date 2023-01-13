<script>
	import DragNDrop from './drag-n-drop.svelte';
	import { titleMaker } from '$utils/title-maker';
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Drag n Drop Element`)}</title>
</svelte:head>

<div class="flex flex-row justify-center items-center">
	<DragNDrop items={[{ id: 1, name: 'Hello' }]} />
	<DragNDrop items={[{ id: 2, name: 'World' }]} />
</div>
