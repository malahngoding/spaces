<script lang="ts">
    export let image:string;
    export let title:string;
    export let excerpt: string;
    export let link:string;
</script>

<div class="w-full shadow-md card">
    <a href="/">
        <img src={image} alt={image} class="image-warp" />
    </a>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-xl font-bold tracking-tight card-title">
                {title}
            </h5>
        </a>
        <p class="mb-3 font-normal text-sm card-subtitle">
            {excerpt}    
        </p>
        <a href={link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center card-button">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

<style>
    .card {
         background: var(--slate1);
         border: 2px solid var(--slate6);
    }
    .image-warp {
        border-bottom: 2px solid var(--slate6)
    }
    .card-title {
        color: var(--slate12);
    }
    .card-subtitle {
        color: var(--slate12);
     }
    .card-button {
        background-color: var(--slate6);
		border: 2px solid var(--slate8);
		padding: var(--space-half) var(--space-regular);
		font-size: var(--font-display);
    }
    .card-button:hover {
        cursor: pointer;
		border: 2px solid var(--slate10);
		box-shadow: 4px 4px var(--slate9);
    }
</style>