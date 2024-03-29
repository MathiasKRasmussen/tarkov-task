<script lang="ts">
	import type { Item } from '@prisma/client';
	import ItemTable from '$lib/components/itemTable.svelte';
	import { page } from '$app/stores';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../../stores/user';
	import NoAccess from '$lib/components/noAccess.svelte';

	const shortNameCol: string = 'Short Name';
	const nameCol: string = 'Name';
	const inRaidCol: string = 'In Raid';
	const otherCol: string = 'Other Task';
	const hideoutCol: string = 'Hideout';
	let saveLoad = false;

	const header: string = 'Items';

	export let urlName: string = '';
	export let items: Item[];

	let searchText: string = '';
	let searchItems: Item[] = [];
	let searchClicked: boolean = false;
	const minSearchLength: number = 2;

	// Searches the items needed for tasks/hideout
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

	// Searches the database for item
	async function databaseSearch() {
		saveLoad = true;
		try {
			const res = await fetch(`${$page.url.origin}/api/get/searchItems`, {
				method: 'POST',
				body: JSON.stringify({
					searchText,
					$userName
				})
			});
			let progressData = await res.json();
			searchItems = progressData.items;
			saveLoad = !progressData.success;
		} catch (error) {
			console.log('An error occured', error);
		}
	}

	// On enter click for search input
	const onKeyPress = (e) => {
		if (e.charCode === 13 && searchText.replace(/\s/g, '').length >= minSearchLength)
			databaseSearch();
	};
</script>

<svelte:head>
	<title>Items - Tarkov Tasker</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	{#if urlName !== $userName}
		<NoAccess />
	{:else}
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
						on:keypress={onKeyPress}
						on:input={() => searchForItems(searchText)}
						on:click={() => (searchText = '')}
					/>
					<!-- Search button -->
					<button
						class="btn btn-square rounded-none rounded-r-lg btn-primary {saveLoad ? 'loading' : ''}"
						disabled={searchText.replace(/\s/g, '').length < minSearchLength}
						on:click={databaseSearch}
						title="Clear input"
					>
						<!-- Shows loading if searching -->
						{#if !saveLoad}
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
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/></svg
							>
						{/if}
					</button>
				</div>
			</div>

			<div class="divider" />

			<!-- If loading shgow loading animation-->
			{#if saveLoad}
				<div class="flex flex-col items-center pt-10">
					<Circle2
						size="120"
						colorOuter="#9A8866"
						colorCenter="#786849"
						colorInner="#CFA85F"
						unit="px"
					/>
					<p class="pt-8"><i>Trying to find the items</i></p>
				</div>
			{/if}

			<!-- Search cant be white space -->
			{#if !searchText.replace(/\s/g, '').length && !saveLoad}
				<!-- Main Table -->
				<ItemTable {shortNameCol} {nameCol} {inRaidCol} {otherCol} {hideoutCol} {items} />
			{:else if searchItems.length && !saveLoad}
				<!-- Search Table -->
				<ItemTable
					{shortNameCol}
					{nameCol}
					{inRaidCol}
					{otherCol}
					{hideoutCol}
					items={searchItems}
				/>
			{:else if searchClicked && !saveLoad}
				<!-- If the item cannot be found -->
				<div class="flex flex-col justify-center items-center">
					<div class="pl-4 pb-2 text-primary text-xl font-bold">No items found</div>
					<div class="text-primary flex flex-col items-center">
						<div class="j">
							Try searching by clicking the search button or <kbd class="kbd kbd-md">ENTER</kbd>
						</div>
						<div>
							If you cant find the item try looking on the
							<a href="https://tarkov-market.com/" target="_blank"><i>Tarkov Market</i></a>
							or the
							<a href="https://escapefromtarkov.fandom.com/wiki/Loot" target="_blank"><i>Wiki</i></a
							>
						</div>
					</div>
				</div>
			{/if}
		{/if}
	{/if}
</div>
