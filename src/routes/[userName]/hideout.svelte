<script lang="ts">
	import { page } from '$app/stores';
	import SaveAlert from '$lib/components/saveAlert.svelte';
	import SkillIcon from '$lib/components/skillIcon.svelte';
	import TraderIcon from '$lib/components/traderIcon.svelte';
	import { isHideoutStationComplete } from '$lib/util/hideout';
	import type { Hideout, HideoutStation, Player, PlayerHasHideout } from '@prisma/client';

	export let hideouts: Hideout[];
	export let playerHasStations: PlayerHasHideout[];
	export let player: Player;

	const header: string = 'Hideout Stations';
	let updateCheckBoxes: boolean = false;
	let saveLoad: boolean = false;
	let updatedPlayerStations: PlayerHasHideout[] = [];

	function stationHasReqs(station: HideoutStation): boolean {
		return (
			station.HideoutReqItem.length ||
			station.HideoutReqSkill.length ||
			station.HideoutReqTrader.length
		);
	}

	// On checkbox change add/remove station from updated array
	function onChange(playerStation: PlayerHasHideout, oldUpdatedStations: PlayerHasHideout[]): void {
		if (oldUpdatedStations.includes(playerStation)) {
			const index: number = oldUpdatedStations.map((object) => object.id).indexOf(playerStation.id);
			oldUpdatedStations.splice(index, 1);
		} else {
			oldUpdatedStations.push(playerStation);
		}
		updatedPlayerStations = oldUpdatedStations;
	}

	// Cancel button clears the update stations array
	function onCancel(): void {
		updatedPlayerStations.forEach((playerStation: PlayerHasHideout) => {
			playerStation.completed = !playerStation.completed;
		});
		updatedPlayerStations.length = 0;
		updateCheckBoxes = !updateCheckBoxes;
	}

	async function onSave(): Promise<void> {
		saveLoad = true;
		try {
			const res = await fetch(`${$page.url.origin}/api/update/playerHideout`, {
				method: 'POST',
				body: JSON.stringify({
					updatedPlayerStations
				})
			});
			let progressData = await res.json();
			saveLoad = !progressData.success;
			updatedPlayerStations.length = 0;
			updateCheckBoxes = !updateCheckBoxes;
		} catch (error) {
			console.log('An error occured', error);
		}
	}
</script>

<svelte:head>
	<title>Hideout</title>
	<meta name="description" content="Hideout" />
</svelte:head>

<div class="flex flex-col justify-center">
	<h1 class="p-4 font-bold">{header}</h1>
	<div class="grid grid-cols-2 gap-x-8 gap-y-2 justify-center">
		{#each hideouts as hideout}
			<div class="overflow-x-auto pb-10">
				<div
					class="card  {isHideoutStationComplete(hideout, playerHasStations)
						? 'shadow-md shadow-success'
						: ''}"
				>
					<!-- Card header: Trader Icon -->
					<div class="bg-primary flex flex-row items-center pt-3 p-4">
						<!-- Trader name-->
						<h2 class="pl-6 card-title text-secondary font-bold text-3xl">{hideout.name}</h2>
					</div>
					{#each playerHasStations as playerHasStation, index}
						{#if playerHasStation.hideoutStation.Hideout.id === hideout.id}
							<div
								class="card border border-base-300 even:bg-base-100 odd:bg-base-200 rounded-none"
							>
								<div class="card-body flex flex-row pt-2 pb-0 pl-4 pr-2">
									<!-- Checkbox for showing if Hideout station is complete-->
									<div class="pt-4">
										{#key updateCheckBoxes}
											<input
												type="checkbox"
												bind:checked={playerHasStation.completed}
												class="checkbox checkbox-primary align-middle"
												on:change={() => onChange(playerHasStation, updatedPlayerStations)}
											/>
										{/key}
									</div>
									<!-- Hideout Info-->
									<div
										tabindex="0"
										class="collapse {stationHasReqs(playerHasStation.hideoutStation)
											? 'collapse-plus'
											: 'collapse-close'} bg-base-{index % 2 === 0 ? '100' : '200'} w-full"
									>
										<input type="checkbox" />
										<!-- Hideout Header-->
										<div class="collapse-title text-xl text-primary">
											{`${hideout.name} ${playerHasStation.hideoutStation.level}`}
										</div>
										<!-- Hideout content -->
										{#if stationHasReqs(playerHasStation.hideoutStation)}
											<div class="collapse-content bg-base-{index % 2 === 0 ? '100' : '200'} pr-12">
												<!-- Item requirements -->
												{#if playerHasStation.hideoutStation.HideoutReqItem.length}
													<div class="divider text-primary">Item requirements</div>
													<div class="flex flex-col gap-2">
														{#each playerHasStation.hideoutStation.HideoutReqItem as reqItem}
															<div class="flex flex-row items-center gap-2">
																<div class="avatar flex justify-center">
																	<div class="rounded-xl w-8 h-8">
																		<a
																			sveltekit:prefetch
																			href={`/item/${reqItem.item.id}`}
																			target="_blank"
																		>
																			<img
																				src={reqItem.item.image}
																				alt={reqItem.item.name}
																				title={reqItem.item.name}
																			/>
																		</a>
																	</div>
																</div>
																<div class="flex flex-row gap-1">
																	<p class="flex text-accent text-sm">{reqItem.count}</p>
																	<a class="text-sm" href={reqItem.item.wiki} target="_blank">
																		{reqItem.item.name}
																	</a>
																</div>
															</div>
														{/each}
													</div>
												{/if}
												<!-- Skill requirements -->
												{#if playerHasStation.hideoutStation.HideoutReqSkill.length}
													<div class="divider text-primary">Skill requirements</div>
													<div class="flex flex-row gap-8 justify-center">
														{#each playerHasStation.hideoutStation.HideoutReqSkill as reqSkill}
															<SkillIcon skill={reqSkill.skill} level={reqSkill.level} />
														{/each}
													</div>
												{/if}
												<!-- Trader requirements -->
												{#if playerHasStation.hideoutStation.HideoutReqTrader.length}
													<div class="divider text-primary">Trader requirements</div>
													<div class="flex flex-row gap-8 justify-center">
														{#each playerHasStation.hideoutStation.HideoutReqTrader as trader}
															<TraderIcon trader={trader.trader} level={trader.level} />
														{/each}
													</div>
												{/if}
											</div>
										{/if}
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Alert for saving stations-->
{#if updatedPlayerStations.length}
	<SaveAlert
		{saveLoad}
		elementsToSave={updatedPlayerStations.length}
		onCancel={() => onCancel()}
		onSave={() => onSave()}
	/>
{/if}