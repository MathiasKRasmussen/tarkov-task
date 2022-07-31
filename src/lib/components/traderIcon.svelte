<script lang="ts">
	import { getTraderRomanLevel } from '$lib/util/trader';
	import type { Trader } from '@prisma/client';

	export let trader: Trader;
	export let level: number;
	export let size: number = 14;
</script>

<!-- Avatar of trader with level indicator-->
<div class="avatar indicator">
	<!-- Level indicator-->
	<span
		class="indicator-item indicator-bottom badge badge-neutral cursor-help"
		title={`${trader.name} level ${level}`}>{getTraderRomanLevel(level)}</span
	>
	<!-- Trader avatar-->
	<div class="avatar flex">
		<div class="rounded w-{size}">
			<a href={trader.wiki} target="_blank">
				<img src={trader.image} alt={trader.name} title={trader.name} />
			</a>
		</div>
	</div>
</div>
