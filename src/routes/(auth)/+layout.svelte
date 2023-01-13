<script lang="ts">
	import '$styles/reset.css';
	import '$styles/main.css';
	import Theme from '$components/theme.svelte';

	import { page } from '$app/stores';

	let path: string;

	$: path = $page.url.pathname;
</script>

<Theme />

<div class="auth">
	<div class="left" class:connect={path === '/auth/connect'} class:login={path === '/auth/login'} />
	<div class="right">
		<div class="form">
			<slot />
		</div>
	</div>
</div>

<style>
	.auth {
		display: flex;
		flex-direction: row;
		min-height: 100vh;
		background-color: var(--slate1);
		color: var(--slate12);
	}
	.left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.login {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('../../assets/images/login.webp');
	}
	.connect {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url('../../assets/images/camps-instead.webp');
	}
	.right {
		min-height: 100vh;
		padding: var(--space-regular);
		background-color: var(--slate1);
	}
	.form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	@media only screen and (min-width: 0px) {
		.left {
			width: 5vw;
		}
		.right {
			width: calc(100vw - 5vw);
		}
	}
	@media only screen and (min-width: 768px) {
		.left {
			width: 200px;
		}
		.right {
			width: calc(100vw - 200px);
		}
	}
	@media only screen and (min-width: 992px) {
		.left {
			width: 340px;
		}
		.right {
			width: calc(100vw - 340px);
		}
	}
	@media only screen and (min-width: 1200px) {
		.left {
			width: 380px;
		}
		.right {
			width: calc(100vw - 380px);
		}
	}
</style>
