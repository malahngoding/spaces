<script lang="ts">
	import { confetti } from '@neoconfetti/svelte';
	console.info(confetti);
</script>

<div use:confetti={{ stageWidth: 500, stageHeight: 200 }} />
