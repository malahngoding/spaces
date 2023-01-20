<script lang="ts">
	import { giveNumberFromTo } from '$utils/random';
	import one from '$assets/gifs/1.mp4';
	import two from '$assets/gifs/2.mp4';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Logo from '$components/branding/logo.svelte';

	const altVideos = [one, two];

	export let title: string;
	export let subTitle: string;
</script>

<div class="styled-hero">
	<video autoPlay={true} muted={true} loop={true} class="hero-video">
		<source src={altVideos[giveNumberFromTo(0, 2)]} type="video/mp4" class="c-PJLV" />
	</video>
	<div class="hero-title">
		<Title>
			<span class="text-slate-100">{title}</span>
		</Title>
		<Subtitle className="font-nectomono">
			<span class="text-slate-100">{subTitle}</span>
		</Subtitle>
	</div>
	<div class="malahngoding-logo">
		<Logo height="128" width="128" />
	</div>
</div>

<style>
	.styled-hero {
		position: relative;
		width: 100%;
		max-width: 100vw;
		height: calc(100vh - 64px);
		background-color: var(--slate5);
	}
	.hero-video {
		width: 100vw;
		height: 100%;
		top: none;
		left: none;
		object-fit: cover;
		z-index: -1;
	}
	.hero-title {
		padding: var(--space-double);
		height: 100%;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		background: linear-gradient(
			73deg,
			rgba(253, 204, 1, 0.3) 0%,
			rgba(253, 108, 74, 0.3) 20%,
			rgba(209, 1, 253, 0.3) 90%
		);
	}

	.malahngoding-logo {
		padding-right: var(--space-double);
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
	}
</style>
