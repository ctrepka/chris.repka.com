<script lang="ts">
	import type { Blog } from '../blog';
	import BlogPost from '../blogPost.svelte';

	/** @type {import('./$types').PageData} */
	export let data: { blog: Blog };
</script>

<BlogPost blog={data.blog} />
