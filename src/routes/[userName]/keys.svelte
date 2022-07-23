<script lang="ts">
	import { page } from '$app/stores';
	const header: string = 'Keys';

	async function post() {
		try {
			const res = await fetch(`${$page.url.origin}/api/update/data`, {
				method: 'POST',
				body: JSON.stringify({})
			});
			let progressData = await res.json();
		} catch (error) {
			console.log('An error occured', error);
		}
	}
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>
	<button class="btn btn-primary" on:click={post}>POST</button>
</div>
