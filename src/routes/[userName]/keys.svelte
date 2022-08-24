<script lang="ts">
	import KeyTable from '$lib/components/keyTable.svelte';
	import SearchbarItems from '$lib/components/searchbarItems.svelte';
	import type { ItemHasType } from '@prisma/client';

	export let keys: ItemHasType[];
	const header: string = 'Keys';
	const shortNameCol: string = 'Short Name';
	const nameCol: string = 'Name';
	const taskCol: string = 'Needed for task';
	const handinCol: string = 'Handin for task';

	let searchText: string = '';
	let searchKeys: ItemHasType[] = [];

	// Searching for items
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
	}
</script>

<svelte:head>
	<title>Keys - Tarkov Tasker</title>
	<meta name="description" content="Keys" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>

	<SearchbarItems bind:searchText {searchForItems} />

	<div class="divider" />

	{#if !searchText.replace(/\s/g, '').length}
		<!-- All keys -->
		<KeyTable {shortNameCol} {nameCol} {taskCol} {handinCol} {keys} />
	{:else if searchKeys.length}
		<!-- Filtered keys by searching -->
		<KeyTable {shortNameCol} {nameCol} {taskCol} {handinCol} keys={searchKeys} />
		<!-- IF no keys could be found -->
	{:else}
		<div class="flex flex-col justify-center items-center">
			<i class="pl-4 pb-2 text-primary text-xl">Could not find that key</i>
		</div>
	{/if}
</div>
