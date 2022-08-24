<script lang="ts">
	import { hideoutImage } from '$lib/util/hideout';
	import { timeString } from '$lib/util/time';

	import type { Craft, CraftReqItem } from '@prisma/client';
	import CraftBarterItem from './craftBarterItem.svelte';

	export let craft: Craft;
</script>

<div class="flex flex-row items-center">
	<!-- Hideout info -->
	<div class="flex flex-col items-center gap-2 w-1/6">
		<!-- Hideout name and level -->
		<span class="text-primary"
			>{`${craft.HideoutStation.Hideout.name} ${craft.HideoutStation.level}`}</span
		>
		<!-- Hideout image -->
		<img
			class="w-12"
			src={hideoutImage(craft.HideoutStation.Hideout.name)}
			alt={craft.HideoutStation.Hideout.name}
			title={craft.HideoutStation.Hideout.name}
		/>
	</div>
	<div class="divider divider-horizontal" />
	<div class="flex flex-row gap-6 w-5/6 justify-center items-center">
		<!-- All required items for craft -->
		<div class="flex flex-row gap-2 items-center">
			{#each craft.CraftReqItem as reqItem}
				<CraftBarterItem item={reqItem.item} count={reqItem.count} />
			{/each}
		</div>
		<!-- Duration to craft -->
		<div class="flex flex-col gap-2 items-center">
			<div class="w-12">
				<img src={`https://svgur.com/i/m3T.svg`} alt="{`Arrow that points to reward item`}}" />
			</div>
			<span class="text-accent">{timeString(craft.duration)}</span>
		</div>

		<div class="flex flex-row gap-2 items-center">
			{#each craft.CraftRewItem as rewItem}
				<CraftBarterItem item={rewItem.item} count={rewItem.count} />
			{/each}
		</div>
	</div>
</div>
