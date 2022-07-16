<script lang="ts">
	import type { PlayerHasTasks, Trader } from '@prisma/client';
	import { userName } from '../../stores/user';

	const header: string = 'Tasks';

	export let traders: Trader[];
	export let playerHasTasks: PlayerHasTasks[];
</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Tasks" />
</svelte:head>

<div class="flex flex-col justify-center">
	<h1 class="p-4 font-bold">{header}</h1>
	{#each traders as trader}
		<p>{trader.name}</p>
		<p>{trader.PlayerHasTrader[0].level}</p>
		<div class="overflow-x-auto">
			<table class="table table-zebra table-compact w-full">
				<!-- Table Head  -->
				<thead>
					<tr class="bg-primary">
						<!-- Col 1: Image -->
						<th class="bg-opacity-0" />
					</tr>
				</thead>
				<tbody>
					<tr>
						<!-- Col 1: Item image -->
						<td
							><div class="avatar flex justify-center">
								<div class="rounded w-12">
									<a href={trader.wiki} target="_blank">
										<img src={trader.image} alt={trader.name} title={trader.name} />
									</a>
								</div>
							</div></td
						>
					</tr>
				</tbody>
			</table>
		</div>
	{/each}
</div>
