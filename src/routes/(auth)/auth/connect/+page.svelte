<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$components/branding/logo.svelte';
	import Paragraph from '$components/typography/paragraph.svelte';
	import { titleMaker } from '$utils/title-maker';

	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<meta property="og:site_name" content="Malah Ngoding" />
	<meta property="og:locale" content="id_ID" />
	<title>{titleMaker(`Bergabung Bersama Kami`)}</title>
</svelte:head>

<div class="m-4 sm:w-[480px]">
	<a href={`/`} class="logo">
		<Logo height="64" width="64" />
	</a>
	<h2 class="text-2xl font-black my-4">Hubungkan Akun Kamu</h2>
	<Paragraph>
		Dapatkan akses ke fitur yang menarik dan bergabung bersama komunitas. Belajar bersama, bermain
		bersama, tumbuh sebagai sebuah platform.
	</Paragraph>

	<form action="?/register" method="POST" use:enhance>
		<div class="form-group">
			<label class="input-label" for="username"><em>Username</em></label>
			<input class="input-text" id="username" name="username" autocomplete="off" />
			{#if form?.emptyUsername}
				<p class="mt-1 text-sm text-amber-500">
					Mohon isi <em class="text-amber-500">username</em> kamu
				</p>
			{/if}
		</div>
		<div class="form-group">
			<label class="input-label" for="password">Kata Sandi</label>
			<input class="input-text" type="password" id="password" name="password" autocomplete="off" />
			{#if form?.emptyPassword}
				<p class="mt-1 text-sm text-amber-500">Mohon isi kata sandi kamu</p>
			{/if}
		</div>
		<div class="form-group">
			<label class="input-label" for="password">Ulangi Kata Sandi</label>
			<input
				class="input-text"
				type="password"
				id="password-verification"
				name="password-verification"
				autocomplete="off"
			/>
			{#if form?.emptyPasswordVerification}
				<p class="mt-1 text-sm text-amber-500">Periksa kata sandi kamu</p>
			{/if}
			{#if form?.invalidPasswordVerfication}
				<p class="mt-1 text-sm text-amber-500">Periksa kata sandi kamu</p>
			{/if}
		</div>
		<div class="have-account">
			<p>Sudah mempunyai akun malah ngoding?</p>
			<a href="/auth/login" class="ml-2">Masuk Disini!</a>
		</div>
		<input class="input-button" type="submit" value="Daftarkan" />
	</form>
</div>

<style>
	.input-button {
		width: 100%;
		border: 2px solid var(--slate6);
		background-color: var(--slate1);
		height: 48px;
		margin-top: var(--space-double);
		padding: var(--space-half);
		font-size: var(--font-md);
	}
	.input-button:hover {
		background-color: var(--slate3);
		cursor: pointer;
	}
	.form-group {
		margin: var(--space-double) 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.input-label {
		font-size: var(--font-regular);
		margin: var(--space-half) 0;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}
	.input-text {
		width: 100%;
		border: 2px solid var(--slate6);
		background-color: var(--slate1);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 8;
		padding: var(--space-half);
		height: 48px;
		font-size: var(--font-md);
		line-height: 1;
		outline-offset: 8;
	}
	.have-account {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.have-account a {
		text-decoration: underline;
	}
	.input-button {
		width: 100%;
		border: 2px solid var(--slate6);
		background-color: var(--slate1);
		height: 48px;
		margin-top: var(--space-double);
		padding: var(--space-half);
		font-size: var(--font-md);
	}
	.input-button:hover {
		background-color: var(--slate3);
		cursor: pointer;
	}
	input[type='password'] {
		font-family: Verdana;
		letter-spacing: 0.125em;
	}
</style>
