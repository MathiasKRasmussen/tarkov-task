<script lang="ts">
	import { getTraderRomanLevel } from '$lib/util/trader';
	import type { Trader } from '@prisma/client';

	export let trader: Trader;
	export let level: number;
	export let size: number = 14;
	export let href: string = '';
</script>

<!-- Avatar of trader with level indicator-->
<div class="avatar indicator">
	<!-- Level indicator-->
	<span
		class="indicator-item indicator-bottom badge badge-neutral cursor-help w-6 h-6 text-lg"
		title={`${trader.name} level ${level}`}>{getTraderRomanLevel(level)}</span
	>
	<!-- Trader avatar-->
	<div class="avatar flex">
		<div class="rounded w-{size}">
			{#if href.length}
				<a sveltekit:prefetch {href}>
					<img src={trader.image} alt={trader.name} title={trader.name} />
				</a>
			{:else}
				<a href={trader.wiki} target="_blank">
					<img src={trader.image} alt={trader.name} title={trader.name} />
				</a>
			{/if}
		</div>
	</div>
</div>
