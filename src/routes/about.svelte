<script lang="ts">
	import { browser, dev } from '$app/env';
	import { formatTaskData } from '$lib/db/data/formatData';
	import { page } from '$app/stores';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	formatTaskData();

	async function onPost() {
		try {
			const res = await fetch(`${$page.url.origin}/api/formatData/stringTypes`, {
				method: 'POST'
			});
			//progressData = await res.json()
			console.log('uploaded  sucessfully');
		} catch (error) {
			console.log('An error occured', error);
		}
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex">
	<button class="btn btn-primary" on:click={onPost}>Post</button>
</div>

<div>
	<h1>About this app</h1>
</div>
