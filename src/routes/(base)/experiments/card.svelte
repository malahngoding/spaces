<script lang="ts">
	export let image: string;
	export let title: string;
	export let excerpt: string;
	export let link: string;
</script>

<div class="w-full shadow-md card">
	<a href={link}>
		<img src={image} alt={image} class="image-warp" />
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
		background: var(--slate3);
		border: 2px solid var(--slate6);
	}
	.image-warp {
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
