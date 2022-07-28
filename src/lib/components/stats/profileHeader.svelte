<script lang="ts">
	import { levelIcon } from '$lib/util/level';

	import type { Player } from '@prisma/client';

	export let player: Player;
</script>

<!-- Header Component for profile -->
<div class="flex flex-row items-center justify-center">
	<!-- Faction image -->
	<div class="avatar flex flex-row">
		<div class="rounded w-20 cursor-help ">
			<img
				src={`/static/svg/${player.faction}.svg`}
				alt={`${player.name} is ${player.faction}`}
				title={`${player.name} is ${player.faction}`}
			/>
		</div>
	</div>
	<!-- Player name and level -->
	<h1 class="font-bold">{`${player.name} - ${player.level}`}</h1>
	<!-- Level image -->
	<div class="avatar flex flex-row pl-3">
		<div class="rounded w-16 cursor-help ">
			<img
				src={levelIcon(player.level)}
				alt={`Level ${player.level}`}
				title={`Level ${player.level}`}
			/>
		</div>
	</div>
</div>
