<script lang="ts">
	import type { ItemHasType } from '@prisma/client';

	export let shortNameCol: string;
	export let nameCol: string;
	export let taskCol: string;
	export let handinCol: string;
	export let keys: ItemHasType[];

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
			a.item[column] < b.item[column]
				? -1 * sortModifier
				: a.item[column] > b.item[column]
				? 1 * sortModifier
				: 0;

		keys = keys.sort(sort);
	};
</script>

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
				<!-- Col 4: Needed for task  -->
				<th class="bg-opacity-0" on:click={() => sort('inRaidCount')} style="cursor: pointer">
					<div class="flex justify-center text-secondary">{taskCol}</div></th
				>
				<!-- Col 5: Needed to handin for task -->
				<th class="bg-opacity-0" on:click={() => sort('otherCount')} style="cursor: pointer">
					<div class="flex justify-center text-secondary">{handinCol}</div></th
				>
				<!-- Col 6: Wiki link -->
				<th class="bg-opacity-0" />
			</tr>
		</thead>
		<tbody>
			{#each keys as key}
				<tr>
					<!-- Col 1: Item image -->
					<td
						><div class="avatar flex justify-center">
							<div class="rounded w-12">
								<a sveltekit:prefetch href={`/item/${key.item.id}`} target="_blank">
									<img src={key.item.image} alt={key.item.name} title={key.item.name} />
								</a>
							</div>
						</div></td
					>
					<!-- Col 2: Item ShortName -->
					<td>
						<div class="flex justify-center text-primary">
							<a sveltekit:prefetch href={`/item/${key.item.id}`} target="_blank" class="font-bold"
								>{key.item.shortName}</a
							>
						</div>
					</td>
					<!-- Col 3: Item Name -->
					<td>
						<div class="flex justify-center text-primary">
							<a
								sveltekit:prefetch
								href={`/item/${key.item.id}`}
								target="_blank"
								class="text-primary font-bold">{key.item.name}</a
							>
						</div>
					</td>
					<!-- Col 4: Key needed for task -->
					<td>
						<div
							class="flex justify-center {key.item.TaskReqKey.length
								? 'text-success'
								: 'text-error'}"
						>
							<b>{key.item.TaskReqKey.length ? 'YES' : 'NO'}</b>
						</div>
					</td>
					<!-- Col 5: Key needed to hand in for task -->
					<td>
						<div
							class="flex justify-center {key.item.TaskReqItem.length
								? 'text-success'
								: 'text-error'}"
						>
							<b>{key.item.TaskReqItem.length ? 'YES' : 'NO'}</b>
						</div>
					</td>
					<!-- Col 6: Link to key's wiki -->
					<td>
						<div class="flex justify-center">
							<a
								class="btn btn-outline btn-primary btn-sm"
								role="button"
								href={key.item.wiki}
								target="_blank">Wiki</a
							>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
