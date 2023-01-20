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
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Tentang Malah Ngoding`)}</title>
</svelte:head>

<section class="wrapper text-center">
	<Section>
		<Subtitle>Memperkenalkan</Subtitle>
		<Title>
			<span class="font-montserrat">Malah Ngoding</span>
		</Title>
		<div class="flex flex-row items-center justify-center">
			<img src={logo} alt="The Logo" class="avatar" />
			<img src={avatar} alt="The Okay" class="avatar rounded" />
		</div>
		<Paragraph>
			<span class="sp">"</span>
			<strong>Lupa Makan, Lupa Tidur, Malah Ngoding</strong>
		</Paragraph>
		<Paragraph>Sejak 2019 - {new Date().getFullYear()}</Paragraph>
	</Section>
	<div class="regular">
		<Section>
			<Markdown>
				<AboutUs />
			</Markdown>
		</Section>
	</div>
</section>
<br />

<style>
	.wrapper {
		display: flex;
		top: auto;
		flex-direction: column;
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
	.avatar {
		margin-top: var(--space-double);
		width: 120px;
		height: 120px;
	}
	.rounded {
		margin-left: var(--space-double);
		border-radius: 100%;
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
	}
</style>
