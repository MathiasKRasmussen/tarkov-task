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
	<h1>Items needed</h1>

	<div class="flex w-full">
		<div class="form-control w-full max-w-xs">
			<label class="label">
				<span class="label-text">Pick the best fantasy franchise</span>
				<span class="label-text-alt" />
			</label>
			<select class="select select-bordered">
				<option disabled selected>Pick one</option>
				<option>Star Wars</option>
				<option>Harry Potter</option>
				<option>Lord of the Rings</option>
				<option>Planet of the Apes</option>
				<option>Star Trek</option>
			</select>
		</div>
	</div>

	<!-- Main Table -->
	<div class="overflow-x-auto">
		<table class="table table-zebra table-compact w-full">
			<!-- head -->
			<thead>
				<tr class="bg-primary">
					<th class="bg-opacity-0" />
					<th class="bg-opacity-0">
						<div class="flex justify-center text-secondary">Short Name</div></th
					>
					<th class="bg-opacity-0">
						<div class="flex justify-center text-secondary">In Raid</div></th
					>
					<th class="bg-opacity-0"> <div class="flex justify-center text-secondary">Other</div></th>
					<th class="bg-opacity-0">
						<div class="flex justify-center text-secondary">Hideout</div></th
					>
					<th class="bg-opacity-0"> <div class="flex justify-center text-secondary">Wiki</div> </th>
				</tr>
			</thead>
			<tbody>
				{#each items as taskItem, index}
					<tr>
						<td
							><div class="avatar flex justify-center">
								<div class="rounded w-12">
									<a sveltekit:prefetch href={`/item/${taskItem.id}`} target="_blank">
										<img src={taskItem.image} alt={taskItem.name} title={taskItem.name} />
									</a>
								</div>
							</div></td
						>
						<td>
							<div class="flex justify-center text-primary">
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
