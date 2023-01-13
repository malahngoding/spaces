<script lang="ts">
	import shield from '$assets/favicons/android-chrome-96x96.png';
	export let height: string;
	export let width: string;
</script>

<img src={shield} alt="Malah Ngoding Shield" style="--height:{height}px;--width:{width}px" />

<style>
	img {
		height: var(--height);
		width: var(--width);
	}
</style>
