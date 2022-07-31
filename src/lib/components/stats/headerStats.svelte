<script lang="ts">
	import { factionFullName, levelIcon, maxLevel } from '$lib/util/level';
	import type { Player } from '@prisma/client';

	export let player: Player;
</script>

<div class="stats shadow flex">
	<!-- Level cell -->
	<div class="stat w-1/6">
		<div class="avatar flex flex-row stat-figure">
			<div class="rounded w-16 cursor-help ">
				<img
					src={levelIcon(player.level)}
					alt={`Level ${player.level}`}
					title={`Level ${player.level}`}
				/>
			</div>
		</div>
		<div class="stat-title text-accent">Level</div>
		<div class="stat-value main-text pb-4">{player.level}</div>
	</div>

	<!-- Name cell -->
	<div class="stat w-2/3">
		<div class="stat-title text-accent">Name</div>
		<div class="stat-value main-text pb-4">{player.name}</div>
	</div>

	<!-- Faction cell -->
	<div class="stat w-1/3">
		<div class="stat-title text-accent">Faction</div>
		<div class="stat-figure avatar flex flex-row">
			<div class="rounded w-20 cursor-help ">
				<img
					src={`/static/svg/${player.faction}.svg`}
					alt={`${player.name} is ${player.faction}`}
					title={`${player.name} is ${player.faction}`}
				/>
			</div>
		</div>
		<div class="stat-value main-text">{player.faction}</div>
		<div class="stat-desc text-accent">{factionFullName(player.faction)}</div>
	</div>
</div>

<style>
	.main-text {
		color: #9e9d9d;
	}
</style>
