<script lang="ts">
	import { format } from 'date-fns';

	export let avatarImage = `https://pbs.twimg.com/profile_images/1525333693316771840/TZnU6i5t_400x400.png`;
	export let avatarImageAlt = `Pixelated face of iconic characters`;
	export let username = `@instead_bot`;
	export let name = `Malah Ngoding Bot`;
	export let timestamp = format(new Date(), 'dd MMMM yyyy');
	export let message = `公式LINE出来ました 私も自分と友達になったよ(笑) 是非、登録してね`;
</script>

<div class="card p-4">
	<img src={avatarImage} alt={avatarImageAlt} class="rounded-full w-10" />
	<div class="ml-4">
		<div class="flex flex-row flex-wrap mb-2">
			<div class="font-extrabold font-montserrat">{name}</div>
			&nbsp;
			<div class="font-normal hover:underline font-nectomono">{username}</div>
		</div>
		<div class="text-base">
			<p>{message}</p>
		</div>
		<div class="text-sm mt-2">{timestamp}</div>
	</div>
</div>

<style>
	.card {
		border: 1px solid var(--slate6);
		border-top: none;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		background-color: var(--slate1);
		width: 100%;
	}
	.card:hover {
		background-color: var(--slate2);
		cursor: pointer;
	}
</style>
