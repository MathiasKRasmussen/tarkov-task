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

	export let items: Item[];
</script>

<svelte:head>
	<title>Items</title>
	<meta name="description" content="Items" />
</svelte:head>

<div>
	<h1 class="text-primary">Items needed</h1>
	<div class="overflow-x-auto">
		<table class="table table-zebra table-compact w-full">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th> <div class="flex justify-center text-primary">Short Name</div></th>
					<th> <div class="flex justify-center text-primary">In Raid</div></th>
					<th> <div class="flex justify-center text-primary">Other</div></th>
					<th> <div class="flex justify-center text-primary">Hideout</div></th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each items as taskItem, index}
					<tr>
						<td
							><div class="avatar flex justify-center">
								<div class="rounded w-14">
									<a sveltekit:prefetch href={`/item/${taskItem.id}`} target="_blank">
										<img src={taskItem.image} alt={taskItem.name} title={taskItem.name} />
									</a>
								</div>
							</div></td
						>
						<td>
							<div class="flex justify-center text-secondary">
								{taskItem.shortName}
							</div>
						</td>
						<td>
							<div class="flex justify-center text-error">
								{taskItem.inRaidCount}
							</div>
						</td>
						<td>
							<div class="flex justify-center text-success">
								{taskItem.otherCount}
							</div>
						</td>
						<td>
							<div class="flex justify-center text-success">
								{taskItem.stationCount}
							</div>
						</td>
						<td>
							<div class="flex justify-center">
								<a
									class="btn btn-primary btn-sm"
									role="button"
									sveltekit:prefetch
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
