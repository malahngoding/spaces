<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	let isDropdownOpen = false;

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const handleDropdownFocusLoss = ({ currentTarget, relatedTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget?.contains(relatedTarget)) {
			return;
		}
		isDropdownOpen = false;
	};
</script>

<div class="dropdown" on:focusout={handleDropdownFocusLoss}>
	<button class="avatar-menu" on:click={handleDropdownClick}>
		{#if isDropdownOpen}
			<img class="avatar" src={`https://avatars.dicebear.com/api/miniavs/1.svg`} alt="1" />
		{:else}
			<img class="avatar" src={`https://avatars.dicebear.com/api/miniavs/2.svg`} alt="2" />
		{/if}
	</button>
	<ul class="dropdown-menu" style:display={isDropdownOpen ? 'block' : 'none'}>
		<li>
			<button
				class="popout-dropdown"
				on:click={async () => {
					invalidateAll();
				}}>Logout</button
			>
		</li>
	</ul>
</div>

<style>
	.dropdown {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.avatar-menu:hover {
		cursor: pointer;
	}
	.avatar-menu {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 4px;
		border: 1px solid var(--slate12);
		background-color: var(--slate6);
	}
	.avatar {
		height: 32px;
		width: 32px;
	}
	.dropdown-menu {
		position: absolute;
		top: 60px;
		right: 0;
		margin: 0 var(--space-double);
		padding: var(--space-regular);
		background-color: var(--slate6);
		border: 1px solid var(--slate12);
		width: 240px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.popout-dropdown {
		font-size: var(--font-display);
		width: 100%;
		border: none;
		padding: var(--space-regular) var(--space-double);
		background-color: var(--slate6);
		border: 1px solid var(--slate6);
	}
	.popout-dropdown:hover {
		padding: var(--space-regular) var(--space-double);
		background-color: var(--slate4);
		border: 1px solid var(--slate10);
		cursor: pointer;
	}
</style>
