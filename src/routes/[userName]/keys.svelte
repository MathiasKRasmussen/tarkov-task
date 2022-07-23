<script lang="ts">
	import { page } from '$app/stores';
	import KeyTable from '$lib/components/keyTable.svelte';
	import SearchbarItems from '$lib/components/searchbarItems.svelte';
	import type { ItemHasType } from '@prisma/client';

	export let keys: ItemHasType[];

	let searchText: string = '';
	let searchKeys: ItemHasType[] = [];
	let searchClicked: boolean = false;

	function searchForItems(): void {
		searchKeys.length = 0;
		keys.find((key) => {
			if (
				key.item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				key.item.shortName.toLowerCase().includes(searchText.toLowerCase())
			) {
				searchKeys.push(key);
			}
		});
		searchClicked = true;
	}

	const header: string = 'Keys';
	const shortNameCol: string = 'Short Name';
	const nameCol: string = 'Name';
	const taskCol: string = 'Needed for task';
	const handinCol: string = 'Handin for task';

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
	<title>Keys</title>
	<meta name="description" content="Keys" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>

	<SearchbarItems bind:searchText {searchForItems} />

	<div class="divider" />

	{#if !searchText.replace(/\s/g, '').length}
		<KeyTable {shortNameCol} {nameCol} {taskCol} {handinCol} {keys} />
	{:else if searchKeys.length}
		<KeyTable {shortNameCol} {nameCol} {taskCol} {handinCol} keys={searchKeys} />
	{:else}
		<div class="flex flex-col justify-center items-center">
			<i class="pl-4 pb-2 text-primary text-xl">Could not find that key</i>
		</div>
	{/if}
</div>
