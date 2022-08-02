<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { navigating } from '$app/stores';
	import { Circle2 } from 'svelte-loading-spinners';
	import BackToTop from '$lib/components/backToTop.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main>
		<!-- If navigating show loading animation-->
		{#if $navigating}
			<div class="flex flex-col justify-center items-center pt-60">
				<Circle2
					size="120"
					colorOuter="#9A8866"
					colorCenter="#786849"
					colorInner="#CFA85F"
					unit="px"
				/>
				<p class="pt-8"><i>Just loading a bit</i></p>
			</div>
		{:else}
			<slot />
		{/if}
	</main>

	<BackToTop />

	<!-- Dont show footer while navigating -->
	{#if !$navigating}
		<footer>
			<p>Made with wholesome memes</p>
		</footer>
	{/if}
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
	/*
	footer a {
		font-weight: bold;
	}
*/
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
