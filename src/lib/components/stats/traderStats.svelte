<script lang="ts">
	import { isMoney } from '$lib/util/items';

	import type { Trader } from '@prisma/client';
	import TraderIcon from '../traderIcon.svelte';

	import ProgressStat from './progressStat.svelte';

	export let trader: Trader;

	let completedTask: number = 0;
	let completedItems: number = 0;
	let totalItems: number = 0;
	const totalTask: number = trader.Task.length;
	trader.Task.forEach((task) => {
		if (task.PlayerHasTasks[0]?.completed) {
			completedTask += 1;
			task.TaskReqItem.forEach((taskReqItem) => {
				if (!isMoney(taskReqItem.item)) completedItems += taskReqItem.count;
			});
		}
		task.TaskReqItem.forEach((taskReqItem) => {
			if (!isMoney(taskReqItem.item)) totalItems += taskReqItem.count;
		});
	});
</script>

<div class="flex flex-col items-center">
	<div class="stats stats-vertical shadow bg-gradient-to-b from-base-100 to-base-300">
		<!-- Displays Task progress -->
		<div class="stat place-items-center">
			<h4 class="text-primary font-bold text-2xl pb-4">{trader.name}</h4>
			<div class="w-5/6 flex justify-center">
				<TraderIcon
					{trader}
					size={28}
					level={trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1}
				/>
			</div>
		</div>

		<!-- Displays Task progress -->
		<ProgressStat
			completed={completedTask}
			total={totalTask}
			header={'Tasks'}
			thickness={10}
			size={7}
		/>

		<!-- Displays Task Item progress -->
		<ProgressStat
			completed={completedItems}
			total={totalItems}
			header={'Items'}
			thickness={10}
			size={7}
		/>
	</div>
</div>
