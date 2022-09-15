<script lang="ts">
	import type { Barter } from '@prisma/client';
	import TraderIcon from '../traderIcon.svelte';
	import CraftBarterItem from './craftBarterItem.svelte';

	export let barter: Barter;
	const playerTraderLevel: number = barter.trader.PlayerHasTrader[0].level;
	const playerHasReqTraderLevel: boolean = playerTraderLevel >= barter.traderLevel;
</script>

<div class="flex flex-row items-center">
	<!-- Trader info -->
	<div class="flex flex-col items-center gap-2 w-1/6 pb-4">
		<a
			class={playerHasReqTraderLevel ? 'text-success' : 'text-error'}
			href={barter.trader.wiki}
			target="_blank"
			title={`Your ${barter.trader.name} level is LL${playerTraderLevel}`}
			>{`${barter.trader.name} LL${barter.traderLevel}`}
		</a>
		<TraderIcon trader={barter.trader} level={barter.traderLevel} size={24} />
	</div>
	<div class="divider divider-horizontal" />
	<div class="flex flex-row gap-6 w-5/6 justify-center items-center">
		<!-- All required items for barter -->
		<div class="flex flex-row gap-2 items-center">
			{#each barter.BarterReqItem as reqItem}
				<CraftBarterItem item={reqItem.item} count={reqItem.count} />
			{/each}
		</div>
		<!-- Arrow -->
		<div class="flex flex-col gap-2 items-center">
			<div class="w-12">
				<img src={`https://svgur.com/i/m3T.svg`} alt="{`Arrow that points to reward item`}}" />
			</div>
		</div>

		<!-- Reward items from barter -->
		<div class="flex flex-row gap-2 items-center">
			{#each barter.BarterRewItem as rewItem}
				<CraftBarterItem item={rewItem.item} count={rewItem.count} />
			{/each}
		</div>
	</div>
</div>
