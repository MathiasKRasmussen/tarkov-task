<script lang="ts">
	import type { Item } from '@prisma/client';
	import Tooltip from '@fouita/tooltip';
	import { iconWidth } from '$lib/util/items';
	import { userName } from '../../stores/user';

	let currentId: string = '';

	export let shortNameCol: string;
	export let nameCol: string;
	export let inRaidCol: string;
	export let otherCol: string;
	export let hideoutCol: string;
	export let items: Item[];
	const maxNameLength: number = 55;

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
</script>

<div class="overflow-x-auto">
	<table class="table table-zebra table-compact w-full">
		<!-- Table Head  -->
		<thead>
			<tr class="bg-gradient-to-b from-primary to-[#776849]">
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
							<div
								class="rounded w-12"
								on:mouseleave={() => (currentId = '')}
								on:mouseenter={() => (currentId = taskItem.id)}
							>
								<!-- Tooltip that shows full size of image -->
								<Tooltip
									pointer="end"
									position="right"
									color="red-500"
									show={currentId === taskItem.id}
								>
									<!-- The full size icon -->
									<div class="p-0.5 w-{iconWidth(taskItem)} bg-primary">
										<img src={taskItem.nameIcon} alt={taskItem.name} title={taskItem.name} />
									</div>
								</Tooltip>
								<!-- Small icon -->
								<a sveltekit:prefetch href={`/${$userName}/item/${taskItem.id}`}>
									<img src={taskItem.nameIcon} alt={taskItem.name} />
								</a>
							</div>
						</div></td
					>
					<!-- Col 2: Item ShortName -->
					<td>
						<div class="flex justify-center text-primary">
							<a sveltekit:prefetch href={`/${$userName}/item/${taskItem.id}`}>
								<b>{taskItem.shortName}</b>
							</a>
						</div>
					</td>
					<!-- Col 3: Item Name -->
					<td>
						<div class="flex justify-center text-primary" title={taskItem.name}>
							<a sveltekit:prefetch href={`/${$userName}/item/${taskItem.id}`}>
								<b class="text-primary"
									>{taskItem.name.length > maxNameLength
										? taskItem.name.substring(0, maxNameLength) + '..'
										: taskItem.name}</b
								>
							</a>
						</div>
					</td>
					<!-- Col 4: Items needed in raid -->
					<td>
						<div
							class="flex justify-center text-error"
							title={taskItem.craftAble ? 'Can be crafted' : ''}
						>
							<b>{taskItem.inRaidCount ? taskItem.inRaidCount : 0}{taskItem.craftAble ? '*' : ''}</b
							>
						</div>
					</td>
					<!-- Col 5: Items needed for tasks not found in raid -->
					<td>
						<div class="flex justify-center text-success">
							<b>{taskItem.otherCount ? taskItem.otherCount : 0}</b>
						</div>
					</td>
					<!-- Col 6: Items needed for hideout stations -->
					<td>
						<div class="flex justify-center text-success">
							<b>{taskItem.stationCount ? taskItem.stationCount : 0}</b>
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

<style>
	.zoom {
	}

	.zoom:hover {
		transform: scale(
			1.5
		); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
	}
</style>
