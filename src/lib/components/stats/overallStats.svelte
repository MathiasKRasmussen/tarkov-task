<script lang="ts">
	import { currencySymbol } from '$lib/util/itemPrice';

	import { isEUR, isMoney, isRUB, isUSD } from '$lib/util/items';

	import type { HideoutStation, Item, Trader } from '@prisma/client';
	import ProgressStat from './progressStat.svelte';

	export let traders: Trader[];
	export let stations: HideoutStation[];

	let completedRUB: number = 0;
	let totalRUB: number = 0;
	let completedUSD: number = 0;
	let totalUSD: number = 0;
	let completedEUR: number = 0;
	let totalEUR: number = 0;

	// Adds the money if item is a money item
	function addMoney(item: Item, count: number, completed: boolean): void {
		if (isRUB(item)) {
			totalRUB += count;
			if (completed) completedRUB += count;
		} else if (isUSD(item)) {
			totalUSD += count;
			if (completed) completedUSD += count;
		} else if (isEUR(item)) {
			totalEUR += count;
			if (completed) completedEUR += count;
		}
	}

	// Finds the amount of completed tasks and task items compared to total
	let completedTasks: number = 0;
	let totalTasks: number = 0;
	let completedTaskItems: number = 0;
	let totalTaskItems: number = 0;
	traders.forEach((trader) => {
		trader.Task.forEach((task) => {
			if (task.PlayerHasTasks[0]?.completed) {
				completedTasks += 1;
				task.TaskReqItem.forEach((taskReqItem) => {
					if (!isMoney(taskReqItem.item)) completedTaskItems += taskReqItem.count;
				});
			}
			totalTasks += 1;
			// Also adds the total money
			task.TaskReqItem.forEach((taskReqItem) => {
				if (!isMoney(taskReqItem.item)) totalTaskItems += taskReqItem.count;
				else addMoney(taskReqItem.item, taskReqItem.count, task.PlayerHasTasks[0]?.completed);
			});
		});
	});

	// Finds the amount of completed hideout stations and stations items compared to total
	let completedStations: number = 0;
	const totalStations: number = stations.length;
	let completedStationItems: number = 0;
	let totalStationItems: number = 0;
	stations.forEach((station) => {
		if (station.PlayerHasHideout[0]?.completed) {
			completedStations += 1;
			station.HideoutReqItem.forEach((hideoutReqItem) => {
				if (!isMoney(hideoutReqItem.item)) completedStationItems += hideoutReqItem.count;
			});
		}
		// Also adds the total money
		station.HideoutReqItem.forEach((hideoutReqItem) => {
			if (!isMoney(hideoutReqItem.item)) totalStationItems += hideoutReqItem.count;
			else
				addMoney(hideoutReqItem.item, hideoutReqItem.count, station.PlayerHasHideout[0]?.completed);
		});
	});
</script>

<div class="flex flex-col w-full gap-2">
	<div class="stats shadow bg-gradient-to-b from-base-100 to-base-300">
		<!-- Tasks completion -->
		<ProgressStat
			completed={completedTasks}
			total={totalTasks}
			header={'Tasks'}
			thickness={10}
			size={6}
		/>

		<!-- Task Items completion -->
		<ProgressStat
			completed={completedTaskItems}
			total={totalTaskItems}
			header={'Task Items'}
			thickness={10}
			size={6}
		/>

		<!-- Hideout Stations completion -->
		<ProgressStat
			completed={completedStations}
			total={totalStations}
			header={'Hideout'}
			thickness={10}
			size={6}
		/>

		<!-- Hideout Stations Items completion -->
		<ProgressStat
			completed={completedStationItems}
			total={totalStationItems}
			header={'Hideout Items'}
			thickness={10}
			size={6}
		/>
	</div>

	<!-- Money row -->
	<div class="stats shadow bg-gradient-to-b from-base-100 to-base-300">
		<!-- RUB -->
		<ProgressStat
			completed={completedRUB}
			total={totalRUB}
			header={`RUB (${currencySymbol('RUB')})`}
			thickness={10}
			size={6}
		/>
		<!-- USD -->
		<ProgressStat
			completed={completedUSD}
			total={totalUSD}
			header={`USD (${currencySymbol('USD')})`}
			thickness={10}
			size={6}
		/>
		<!-- EUR -->
		<ProgressStat
			completed={completedEUR}
			total={totalEUR}
			header={`EUR (${currencySymbol('EUR')})`}
			thickness={10}
			size={6}
		/>
	</div>
</div>
