<script lang="ts">
	import { base } from "$app/paths";
	export let data;

</script>

<section>
	{#if data.blogs.length > 0}
		{#each data.blogs as blog}
			<h1><a href="{base}/blog/{blog.uuid}">{blog.title}</a></h1>
		{/each}
	{:else}
		<h2>No Blogs Here Yet :(</h2>
	{/if}
</section>
