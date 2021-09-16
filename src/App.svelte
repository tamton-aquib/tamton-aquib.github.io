<script>
	import Header from "./lib/Header.svelte";
	import MidContainer from "./lib/MidContainer.svelte";

	import Socials from "./lib/Socials.svelte";
</script>

<main>
	<Header />

	<div class="mid-container">
		<MidContainer />
	</div>
	<Socials />
</main>

<style>
	:root {
		font-family: "Cascadia Code", sans-serif;
		background-color: #1a2026;
		color: #9ce5c0;
		margin: 0;
		padding: 0;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
	.mid-container {
		margin-top: 150px;
	}
</style>
