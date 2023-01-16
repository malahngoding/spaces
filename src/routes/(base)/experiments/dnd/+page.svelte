<script lang="ts">
	import DragNDrop from './drag-n-drop.svelte';
	import { titleMaker } from '$utils/title-maker';
	import wretch from 'wretch';

	function handleClick() {
		wretch('http://localhost:5000/echo')
			.get()
			.notFound((error) => {
				console.log(error);
			})
			.unauthorized((error) => {
				console.log(error);
			})
			.error(418, (error) => {
				console.log(error);
			})
			.json((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}
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

<div class="flex flex-row justify-center items-center my-8">
	<button on:click={handleClick}>OK</button>
</div>
