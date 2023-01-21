<script lang="ts">
	import { getHome } from '$services/micros-adapter/home';
	import { getPing } from '$services/filaments-adapter/ping';
	import { getEcho } from '$services/decays-adapter/echo';
	import Marquee from '$components/branding/marquee.svelte';
	import { titleMaker } from '$utils/title-maker';

	async function callMe() {
		const [filaments, micros, decays] = await Promise.all([
			(await getPing()).status,
			(await getHome()).status,
			(await getEcho()).random
		]);
		console.log(filaments, micros, decays);
	}
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Fast Marquee`)}</title>
</svelte:head>

<div class="flex flex-col justify-center items-center">
	<Marquee speed={30}>
		<img
			src="https://images.hedera.com/HH-Council-Logos-Avery-Dennison-SoftGrey.png?w=400&auto=compress%2Cformat&fit=crop&dm=1670338327&s=5b08f2312ec9bc1e0dfcb9bfdb699620"
			alt=""
		/>
		<img
			src="https://images.hedera.com/HH-Council-Logos-SoftGrey-Abrdn.png?w=400&auto=compress%2Cformat&fit=crop&dm=1670270346&s=e98b911c00515d5eabf7bc460077674d"
			alt=""
		/>
		<img
			src="https://images.hedera.com/HH-Council-Logos-Boeing-SoftGrey.png?w=400&auto=compress%2Cformat&fit=crop&dm=1670338383&s=6bf9f2d3b418a3f06bb18ba0dce4b073"
			alt=""
		/>
		<img
			src="https://images.hedera.com/HH-Council-Logos-Nomura-SoftGrey.png?w=400&auto=compress%2Cformat&fit=crop&dm=1670338917&s=0f0ba327544a7feb59acd339005eeddf"
			alt=""
		/>
	</Marquee>
	<br />
	<Marquee speed={50}>
		<button on:click={callMe} class="px-6 py-3 m-4"> Click </button>
	</Marquee>
</div>

<style>
	img {
		height: 64px;
	}
</style>
