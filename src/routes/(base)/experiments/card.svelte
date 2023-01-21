<script lang="ts">
	export let image: string;
	export let title: string;
	export let excerpt: string;
	export let link: string;
	export let width: number;
	export let height: number;
</script>

<div class="w-full shadow-md card">
	<a href={link}>
		<img
			src={image}
			alt={title}
			class="image-warp"
			loading="lazy"
			height={`${height}px`}
			width={`${width}px`}
		/>
	</a>
	<div class="p-5">
		<a href={link}>
			<h5 class="mb-2 text-xl font-bold tracking-tight card-title">
				{title}
			</h5>
		</a>
		<p class="mb-3 font-normal text-sm card-subtitle">
			{excerpt}
		</p>
	</div>
</div>

<style>
	.card {
		background: var(--slate1);
		border: 2px solid var(--slate6);
	}
	.card:hover {
		background: linear-gradient(
			73deg,
			rgba(253, 204, 1, 0.3) 0%,
			rgba(253, 108, 74, 0.3) 20%,
			rgba(209, 1, 253, 0.3) 90%
		);
		border: 2px solid var(--slate6);
	}
	.image-warp {
		width: 100%;
		border-bottom: 2px solid var(--slate6);
	}
	.card-title {
		color: var(--slate12);
	}
	.card-title:hover {
		text-decoration: underline;
	}
	.card-subtitle {
		color: var(--slate12);
	}
</style>
