<script lang="ts">
	import { giveNumberFromTo } from '$utils/random';
	import one from '$assets/gifs/1.mp4';
	import two from '$assets/gifs/2.mp4';
	import three from '$assets/gifs/3.mp4';
	import four from '$assets/gifs/4.mp4';
	import five from '$assets/gifs/5.mp4';
	import six from '$assets/gifs/6.mp4';
	import seven from '$assets/gifs/7.mp4';
	import eight from '$assets/gifs/8.mp4';
	import nine from '$assets/gifs/9.mp4';
	import ten from '$assets/gifs/10.mp4';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';

	const altVideos = [one, two, three, four, five, six, seven, eight, nine, ten];

	export let title: string;
	export let subTitle: string;
</script>

<div class="styled-hero">
	<video autoPlay={true} muted={true} loop={true} class="hero-video">
		<source src={altVideos[giveNumberFromTo(0, 10)]} type="video/mp4" class="c-PJLV" />
	</video>
	<div class="hero-title">
		<Title>{title}</Title>
		<Subtitle>{subTitle}</Subtitle>
	</div>
</div>

<style>
	.styled-hero {
		position: relative;
		width: 100%;
		max-width: 100vw;
		height: 520px;
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
		background-image: linear-gradient(to right, var(--transparent-left), var(--transparent-right));
	}
</style>
