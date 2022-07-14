<script lang="ts">
	import { browser, dev } from '$app/env';
	import { page } from '$app/stores';
	import type { Item } from '@prisma/client';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	export let taskItems: Item[];
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	<h1>Task items</h1>
	<div class="overflow-x-auto">
		<table class="table table-zebra w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Short Name</th>
					<th>Item Name</th>
					<th>In Raid</th>
					<th>Other</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each taskItems as taskItem, index}
					<tr>
						<td>{taskItem.shortName}</td>
						<td>{taskItem.name}</td>
						<td>{taskItem.inRaidCount}</td>
						<td>{taskItem.otherCount}</td>
						<td
							><a
								class="btn btn-ghost btn-sm"
								role="button"
								sveltekit:prefetch
								href={`/item/${taskItem.id}`}>View Item</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
