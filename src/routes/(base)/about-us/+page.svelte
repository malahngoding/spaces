<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import avatar from '$assets/images/avatar.png';
	import logo from '$assets/favicons/android-chrome-512x512.png';

	import AboutUs from './about-us.md';
	import { titleMaker } from '$utils/title-maker';
	import Subtitle from '$components/typography/subtitle.svelte';
	import Title from '$components/typography/title.svelte';
	import Section from '$components/wrapper/section.svelte';
	import Paragraph from '$components/typography/paragraph.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Tentang Malah Ngoding`)}</title>
</svelte:head>

<section class="wrapper">
	<div class="regular">
		<Section>
			<Markdown>
				<AboutUs />
			</Markdown>
		</Section>
	</div>
	<aside class="sticky">
		<div class="left-side">
			<Subtitle>Memperkenalkan</Subtitle>
			<Title>Malah Ngoding</Title>
			<div class="flex flex-row justify-center items-center">
				<img src={logo} alt="The Logo" class="avatar" />
				<img src={avatar} alt="The Okay" class="avatar rounded" />
			</div>
			<Paragraph>
				<span class="sp">"</span>
				<strong>Lupa Makan, Lupa Tidur, Malah Ngoding</strong>
			</Paragraph>
			<Paragraph>Sejak 2019 - {new Date().getFullYear()}</Paragraph>
		</div>
		<div class="flex flex-col mb-8 p-4">
			<Title>Pojok Pertanyaan</Title>
			{#each data.questions as qna, i}
				<Subtitle>
					{qna.comment}
				</Subtitle>
				<Paragraph>
					{qna.answer}
				</Paragraph>
			{/each}
		</div>
	</aside>
</section>

<style>
	.wrapper {
		display: flex;
		top: auto;
		flex-direction: column-reverse;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		align-self: center;
		flex-wrap: wrap;
	}
	.regular {
		width: 100%;
		max-width: 720px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.sticky {
		width: 100%;
		display: flex;
		position: relative;
		top: 64px;
		flex-direction: column;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		align-self: flex-start;
		padding: 0 var(--space-double);
		text-align: center;
		margin-top: -64px;
	}
	.avatar {
		margin-top: var(--space-double);
		width: 120px;
		height: 120px;
	}
	.rounded {
		margin-left: var(--space-double);
		border-radius: 100%;
	}
	.left-side {
		margin-top: var(--space-double);
		margin-bottom: var(--space-double);
	}
	.sp {
		font-size: var(--font-xl);
		font-weight: 900;
	}
	@media only screen and (min-width: 992px) {
		.wrapper {
			flex-direction: row;
		}
		.regular {
			width: 60%;
			margin-top: 0;
			max-width: none;
		}
		.sticky {
			margin-top: 0;
			position: sticky;
			width: 40%;
			padding: 0;
			text-align: start;
		}
	}
</style>
