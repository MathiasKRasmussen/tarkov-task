<script lang="ts">
	import type { Item } from '@prisma/client';
	import { createCraftItemsList } from '$lib/db/data/formatData';
	import { loop_guard } from 'svelte/internal';

	const shortNameCol: string = 'Short Name';
	const nameCol: string = 'Name';
	const inRaidCol: string = 'In Raid';
	const otherCol: string = 'Other Task';
	const hideoutCol: string = 'Hideout';
	const wikiCol: string = 'Wiki';

	const header: string = 'Items needed';

	export let items: Item[];

	let searchText: string = '';
	let searchItems: Item[] = [];
	let searchClicked: boolean = false;

	// Holds table sort state.  Initialized to reflect table sorted by id column ascending.
	let sortBy = { col: 'shortName', ascending: true };

	// Sort table by columns
	$: sort = (column) => {
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending;
		} else {
			sortBy.col = column;
			sortBy.ascending = true;
		}

		// Modifier to sorting function for ascending or descending
		let sortModifier = sortBy.ascending ? 1 : -1;

		let sort = (a, b) =>
			a[column] < b[column] ? -1 * sortModifier : a[column] > b[column] ? 1 * sortModifier : 0;

		items = items.sort(sort);
	};

	function searchForItems(term: string): void {
		items.find((item) => {
			if (
				item.name.toLowerCase().includes(term.toLowerCase()) ||
				item.shortName.toLowerCase().includes(term.toLowerCase())
			) {
				searchItems.push(item);
				searchClicked = true;
			}
		});
	}

	function clearSearch() {
		if (searchItems.length) {
			searchItems.length = 0;
		}
		searchClicked = false;
	}
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>

	<div class="pb-8">
		<div class="relative">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg
					aria-hidden="true"
					class="w-5 h-5 text-primary"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</div>
			<form on:submit|preventDefault={() => searchForItems(searchText)}>
				<input
					type="text"
					id="default-search"
					class="block p-4 pl-10 w-full text-sm text-primary bg-base-100 rounded-lg input-bordered input-primary border border-secondary"
					placeholder="Search Items"
					required
					bind:value={searchText}
					on:input={() => clearSearch()}
				/>
			</form>
		</div>
	</div>
	{#key searchClicked}
		<h1>Here</h1>
		{#if searchItems.length}
			{#each searchItems as item}
				<div>{item.name}</div>
			{/each}
		{/if}
	{/key}

	<!-- Main Table -->
	<div class="overflow-x-auto">
		<table class="table table-zebra table-compact w-full">
			<!-- Table Head  -->
			<thead>
				<tr class="bg-primary">
					<!-- Col 1: Image -->
					<th class="bg-opacity-0" />
					<!-- Col 2: Short Name -->
					<th class="bg-opacity-0" on:click={() => sort('shortName')} style="cursor: pointer">
						<div class="flex justify-center text-secondary">{shortNameCol}</div></th
					>
					<!-- Col 3: Name -->
					<th class="bg-opacity-0" on:click={() => sort('name')} style="cursor: pointer">
						<div class="flex justify-center text-secondary">{nameCol}</div></th
					>
					<!-- Col 4: In Raid Count -->
					<th class="bg-opacity-0" on:click={() => sort('inRaidCount')} style="cursor: pointer">
						<div class="flex justify-center text-secondary">{inRaidCol}</div></th
					>
					<!-- Col 5: Task Not In Raid Count -->
					<th class="bg-opacity-0" on:click={() => sort('otherCount')} style="cursor: pointer">
						<div class="flex justify-center text-secondary">{otherCol}</div></th
					>
					<!-- Col 6: Station items Count -->
					<th class="bg-opacity-0" on:click={() => sort('stationCount')} style="cursor: pointer">
						<div class="flex justify-center text-secondary">{hideoutCol}</div></th
					>
					<!-- Col 7: Wiki link -->
					<th class="bg-opacity-0" />
				</tr>
			</thead>
			<tbody>
				{#each items as taskItem}
					<tr>
						<!-- Col 1: Item image -->
						<td
							><div class="avatar flex justify-center">
								<div class="rounded w-12">
									<a sveltekit:prefetch href={`/item/${taskItem.id}`} target="_blank">
										<img src={taskItem.image} alt={taskItem.name} title={taskItem.name} />
									</a>
								</div>
							</div></td
						>
						<!-- Col 2: Item ShortName -->
						<td>
							<div class="flex justify-center text-primary">
								<b>{taskItem.shortName}</b>
							</div>
						</td>
						<!-- Col 3: Item Name -->
						<td>
							<div class="flex justify-center text-primary">
								<b>{taskItem.name}</b>
							</div>
						</td>
						<!-- Col 4: Items needed in raid -->
						<td>
							<div
								class="flex justify-center text-error"
								title={taskItem.craftAble ? 'Can be crafted' : ''}
							>
								<b>{taskItem.inRaidCount}{taskItem.craftAble ? '*' : ''}</b>
							</div>
						</td>
						<!-- Col 5: Items needed for tasks not found in raid -->
						<td>
							<div class="flex justify-center text-success">
								<b>{taskItem.otherCount}</b>
							</div>
						</td>
						<!-- Col 6: Items needed for hideout stations -->
						<td>
							<div class="flex justify-center text-success">
								<b>{taskItem.stationCount}</b>
							</div>
						</td>
						<!-- Col 7: Link to item's wiki -->
						<td>
							<div class="flex justify-center">
								<a
									class="btn btn-outline btn-primary btn-sm"
									role="button"
									href={taskItem.wiki}
									target="_blank">Wiki</a
								>
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
