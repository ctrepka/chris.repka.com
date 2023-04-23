<script lang="ts">
	import type { Blog } from './blog';
	import Viewer from '../../../node_modules/bytemd/svelte/viewer.svelte';
	import { config } from '../../lib/config';
	export let blog: Blog | undefined;

	const plugins = config.bytemdConfig.plugins;
</script>

{#if blog}
	<h1>{blog.title}</h1>
	<section>
		<Viewer {plugins} value={blog.body} />
	</section>
{/if}
