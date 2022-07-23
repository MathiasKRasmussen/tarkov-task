<script lang="ts">
	import type { Item } from '@prisma/client';
	import ItemTable from '$lib/components/itemTable.svelte';

	const shortNameCol: string = 'Short Name';
	const nameCol: string = 'Name';
	const inRaidCol: string = 'In Raid';
	const otherCol: string = 'Other Task';
	const hideoutCol: string = 'Hideout';
	const wikiCol: string = 'Wiki';

	const header: string = 'Items';

	export let items: Item[];

	let searchText: string = '';
	let searchItems: Item[] = [];
	let searchClicked: boolean = false;

	function searchForItems(term: string): void {
		searchItems.length = 0;
		items.find((item) => {
			if (
				item.name.toLowerCase().includes(term.toLowerCase()) ||
				item.shortName.toLowerCase().includes(term.toLowerCase())
			) {
				searchItems.push(item);
			}
		});
		searchClicked = true;
	}
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>

	<!-- If all items have been collected -->
	{#if !items.length}
		<div class="flex justify-center pt-6">
			<h2 class="text-success text-3xl font-bold">All items collected</h2>
		</div>
	{:else}
		<!-- Search area-->
		<div class="pb-2">
			<div class="flex relative">
				<!-- Search icon-->
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-primary"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							opacity={0.75}
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</div>
				<!-- Search input -->
				<input
					type="text"
					id="default-search"
					class="block p-3 pl-10 w-full text-md text-primary bg-base-100 rounded-l-lg input-bordered input-primary border border-secondary placeholder-primary placeholder-opacity-50"
					placeholder="Search Items"
					required
					bind:value={searchText}
					on:input={() => searchForItems(searchText)}
				/>
				<button
					class="btn btn-square rounded-none rounded-r-lg btn-primary"
					disabled={searchText.replace(/\s/g, '').length === 0}
					on:click={() => (searchText = '')}
					title="Clear input"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>
		</div>

		<div class="divider" />

		{#if !searchText.replace(/\s/g, '').length}
			<!-- Main Table -->
			<ItemTable {shortNameCol} {nameCol} {inRaidCol} {otherCol} {hideoutCol} {items} />
		{:else if searchItems.length}
			<!-- Seaarch Table -->
			<ItemTable {shortNameCol} {nameCol} {inRaidCol} {otherCol} {hideoutCol} items={searchItems} />
		{:else if searchClicked}
			<div class="flex flex-col justify-center items-center">
				<i class="pl-4 pb-2 text-primary text-xl">No items found</i>
				<div class="text-primary">
					Try looking on the
					<a href="https://tarkov-market.com/" target="_blank"><i>Tarkov Market</i></a>
				</div>
			</div>
		{/if}
	{/if}
</div>
