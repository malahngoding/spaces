<script lang="ts">
	import { getHome } from '$services/micros-adapter/home';
	import { getPing } from '$services/filaments-adapter/ping';
	import { getEcho } from '$services/decays-adapter/echo';

	async function callMe() {
		const [filaments, micros, decays] = await Promise.all([
			(await getPing()).status,
			(await getHome()).status,
			(await getEcho()).random
		]);
		console.log(filaments, micros, decays);
	}
</script>

<div class="flex flex-row justify-center items-center">
	<button on:click={callMe} class="px-6 py-3 m-4"> Click </button>
</div>
