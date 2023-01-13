<script lang="ts">
	import activationImage from '$assets/images/activation.svg';

	let activation = true;
	const hideActivation = (): void => {
		activation = false;
	};
</script>

{#if activation}
	<div
		class="fixed bottom-0 left-0 w-full bg-none z-50"
		on:click={hideActivation}
		on:keypress={hideActivation}
	>
		<div class="background-image" style="--img:url({activationImage});" />
	</div>
{/if}

<style>
	.background-image {
		background: var(--img);
		background-repeat: no-repeat;
		height: clamp(110px, 150px, 210px);
		object-fit: cover;
	}
</style>
