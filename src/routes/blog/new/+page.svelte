<script lang="ts">
	import type { Blog } from '../blog';
	import BlogPost from '../blogPost.svelte';
	import 'bytemd/dist/index.css';
	import Editor from '../../../../node_modules/bytemd/svelte/editor.svelte';
	import { config } from '../../../lib/config';

	const newBlog: Blog = {
		uuid: '',
		body: '',
		public: false,
		published_on: new Date(),
		title: 'new blog'
	};

	function handleChange(e: any) {
		newBlog.body = e.detail.value;
	}

	const plugins = config.bytemdConfig.plugins;
	let showPreview = false;
</script>

<article>
	<form method="POST" action="?/create">
		<h1>New Blog Post: {newBlog.title}</h1>
		<input name="title" bind:value={newBlog.title} required />
		<input name="public" type="checkbox" bind:checked={newBlog.public} required />
		<input name="published_on" type="date" bind:value={newBlog.published_on} required />

		<Editor value={newBlog.body} {plugins} on:change={handleChange} />
		<textarea name="body" bind:value={newBlog.body} style="display:none;" required />

		<input type="submit" value="Create Blog Post" />
	</form>
</article>

<button on:click={() => (showPreview = true)}>View Preview</button>
{#if showPreview}
	<section class="preview-modal">
		<div class="preview-header">
			<h1>Preview of {newBlog.title}</h1>
			<button on:click={() => (showPreview = false)}>Close Preview</button>
		</div>
		<div class="preview-content">
			<BlogPost blog={newBlog} />
		</div>
	</section>
{/if}

<div>
	<h2>JSON:</h2>
	{JSON.stringify(newBlog)}
</div>

<style lang="scss">
	article {
		width: 100%;
		display: grid;
		gap: 0.5rem;
		flex-direction: column;
		align-items: flex-start;
		justify-content: stretch;
		grid-template-columns: 1fr;

		input {
			width: 100%;
		}
	}

	section.preview-modal {
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background: white;
		grid-template-rows: auto 1fr;

		div.preview-header {
			display: grid;
			grid-template-columns: 1fr auto;
			padding: 0.5rem;
			background: #333;
			color: white;
		}
		div.preview-content {
			padding: 0.5rem;
		}
	}
</style>
