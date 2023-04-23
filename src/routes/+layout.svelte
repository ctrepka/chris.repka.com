<script>
	import '../app.scss';
</script>

<div class="root">
	<header />
	<main>
		<slot />
	</main>
	<footer />
</div>

<style lang="scss">
	div.root {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;

		header {
			padding: 0.5rem;
			background: #333;
			height: 2rem;
		}
		main {
            display: 100%;
			padding: 0.25rem;
            overflow-y: scroll;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
		}
		footer {
			padding: 0.5rem;
			background: #111;
			height: 2rem;
		}
	}
</style>
