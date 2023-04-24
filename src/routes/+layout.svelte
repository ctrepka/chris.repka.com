<script>
	import { base } from '$app/paths';
	import '../app.scss';
</script>

<div class="root">
	<header>
		<div class="home">
			<a href="{base}/">Chris Repka's Portfolio</a>
		</div>
		<div class="nav">
			<a href="{base}/blog">Blog</a>
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer />
</div>

<style lang="scss">
	div.root {
		background: #25252c;
		color: #fff;
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;

		header {
			width: 100%;
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: center;
			justify-items: space-between;
			padding: 1.5rem;
			background: #25252c;
			height: 2rem;

			a {
				color: white;
				text-decoration: none;
				&:hover {
					color: #48dcba;
				}
			}

			.nav {
				display: grid;
				align-items: center;
				justify-content: end;
			}
			.home {
				display: grid;
				align-items: center;
				justify-content: start;

				a {
					color: #48dcba;
					font-weight: 700 !important;
				}
			}
		}
		main {
			display: 100%;
			padding: 1.5rem;
			padding-top: 4rem;
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
