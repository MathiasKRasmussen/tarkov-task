<script lang="ts">
	import type { Trader } from '@prisma/client';
	import TraderIcon from '../traderIcon.svelte';

	import TraderTasksItemsStat from './traderTasksItemsStat.svelte';

	export let trader: Trader;

	let completedTask: number = 0;
	let completedItems: number = 0;
	let totalItems: number = 0;
	const totalTask: number = trader.Task.length;
	trader.Task.forEach((task) => {
		if (task.PlayerHasTasks[0]?.completed) {
			completedTask += 1;
			completedItems += task.TaskReqItem.length;
		}
		totalItems += task.TaskReqItem.length;
	});
</script>

<div class="flex flex-col items-center">
	<div class="stats stats-vertical shadow">
		<!-- Displays Task progress -->
		<div class="stat place-items-center">
			<h4 class="text-primary font-bold text-2xl pb-4">{trader.name}</h4>
			<TraderIcon
				{trader}
				size={36}
				level={trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1}
			/>
		</div>

		<!-- Displays Task progress -->
		<TraderTasksItemsStat completed={completedTask} total={totalTask} header={'Tasks'} />

		<!-- Displays Task Item progress -->
		<TraderTasksItemsStat completed={completedItems} total={totalItems} header={'Items'} />
	</div>
</div>
