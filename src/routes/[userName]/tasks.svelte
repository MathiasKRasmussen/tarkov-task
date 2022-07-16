<script lang="ts">
	import { getRequiredTaskItems } from '$lib/util/formatItems';
	import { getTraderImage } from '$lib/util/images';
	import { page } from '$app/stores';

	import type { Player, PlayerHasTasks, TaskOnMap, Trader } from '@prisma/client';
	import { userName } from '../../stores/user';
	import ItemId from '../item/[itemId].svelte';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';

	const header: string = 'Tasks';

	export let traders: Trader[];
	export let playerHasTasks: PlayerHasTasks[];
	export let player: Player;
	let updatedPlayerTasks: PlayerHasTasks[] = [];
	let updateCheckBoxes: boolean = false;
	let saveLoad: boolean = false;

	// Get trader level
	function getTraderLevel(trader: Trader): number {
		return trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1;
	}

	// Convert trader level from Int to Roman
	function getTraderRomanLevel(trader: Trader): string {
		const level: number = getTraderLevel(trader);
		switch (level) {
			case 1:
				return 'I';
			case 2:
				return 'II';
			case 3:
				return 'III';
			case 4:
				return '♕';
			default:
				return 'I';
		}
	}

	// Gets the playerTasks for a given trader
	function getTraderTasks(trader: Trader): PlayerHasTasks[] {
		let traderTasks: PlayerHasTasks[] = [];
		playerHasTasks.forEach((playerTask: PlayerHasTasks) => {
			if (playerTask.task.trader.id === trader.id) {
				traderTasks.push(playerTask);
			}
		});
		return traderTasks;
	}

	// Handle when task is set to be completed/incomplete
	function onChange(playerTask: PlayerHasTasks, oldUpdatedTasks: PlayerHasTasks[]) {
		if (oldUpdatedTasks.includes(playerTask)) {
			const index: number = oldUpdatedTasks.map((object) => object.id).indexOf(playerTask.id);
			oldUpdatedTasks.splice(index, 1);
		} else {
			oldUpdatedTasks.push(playerTask);
		}
		updatedPlayerTasks = oldUpdatedTasks;
	}

	// Creates a string of all the maps on a task
	function createMapString(taskOnMaps: TaskOnMap[]): string {
		if (taskOnMaps.length) {
			let mapsName: string = '(';
			taskOnMaps.forEach((taskOnMap: TaskOnMap, index) => {
				if (index === 0) {
					mapsName = mapsName.concat(taskOnMap.map.name);
				} else {
					mapsName = mapsName.concat(', ' + taskOnMap.map.name);
				}
			});
			mapsName = mapsName.concat(')');
			return mapsName;
		} else {
			return '';
		}
	}

	// Cancel button clears the update tasks array
	function onCancel(): void {
		updatedPlayerTasks.forEach((playerTask: PlayerHasTasks) => {
			playerTask.completed = !playerTask.completed;
		});
		updatedPlayerTasks.length = 0;
		updateCheckBoxes = !updateCheckBoxes;
	}

	async function onSave(): void {
		saveLoad = true;
		try {
			const res = await fetch(`${$page.url.origin}/api/update/playerTasks`, {
				method: 'POST',
				body: JSON.stringify({
					updatedPlayerTasks
				})
			});
			let progressData = await res.json();
			saveLoad = !progressData.success;
			updatedPlayerTasks.length = 0;
			updateCheckBoxes = !updateCheckBoxes;
		} catch (error) {
			console.log('An error occured', error);
		}
	}
</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Tasks" />
</svelte:head>

<div class="flex flex-col justify-center">
	<h1 class="p-4 font-bold">{header}</h1>
	<div>
		{#each traders as trader}
			<div class="overflow-x-auto pb-10">
				<div class="card shadow-xl">
					<!-- Card header -->
					<div class="card-body bg-primary flex flex-row items-center pt-3 p-4">
						<!-- Avatar of trader with level indicator-->
						<div class="avatar indicator">
							<!-- Level indicator-->
							<span
								class="indicator-item indicator-bottom badge badge-neutral"
								title={trader.name + ' level ' + getTraderLevel(trader)}
								>{getTraderRomanLevel(trader)}</span
							>
							<!-- Trader avatar-->
							<div class="avatar flex">
								<div class="rounded w-14">
									<a href={trader.wiki} target="_blank">
										<img src={getTraderImage(trader.name)} alt={trader.name} title={trader.name} />
									</a>
								</div>
							</div>
						</div>
						<!-- Trader name-->
						<h2 class="pl-6 card-title text-secondary font-bold text-3xl">{trader.name}</h2>
					</div>

					{#each getTraderTasks(trader) as traderTask, index}
						<div class="card border border-base-300 even:bg-base-100 odd:bg-base-200 rounded-none">
							<div class="card-body flex flex-row pt-2 pb-0 pl-4 pr-2">
								<!-- Checkbox for showing if task is complete-->
								<div class="pt-4">
									{#key updateCheckBoxes}
										<input
											type="checkbox"
											bind:checked={traderTask.completed}
											class="checkbox checkbox-primary align-middle"
											on:change={() => onChange(traderTask, updatedPlayerTasks)}
										/>
									{/key}
								</div>
								<!-- Task Info-->
								<div
									tabindex="0"
									class="collapse collapse-plus bg-base-{index % 2 === 0 ? '100' : '200'} w-full"
								>
									<input type="checkbox" />
									<!-- Task Header-->
									<div class="collapse-title text-xl text-primary">
										{traderTask.task.name + ' '}
										<i>{createMapString(traderTask.task.TaskOnMap)}</i>
									</div>
									<!-- Task content -->
									<div class="collapse-content bg-base-{index % 2 === 0 ? '100' : '200'}">
										<!-- General info -->
										<div class="divider text-primary">Info</div>
										<!-- Task needed for Kappa -->
										<div class="flex flex-row gap-4">
											<div class="flex flex-row gap-1">
												<p class="flex text-accent">Kappa:</p>
												<p class="flex text-{traderTask.task.forKappa ? 'success' : 'error'}">
													{traderTask.task.forKappa ? 'Yes' : 'No'}
												</p>
											</div>
											<!-- Minimum level to complete-->
											<div class="flex flex-row gap-1">
												<p class="flex text-accent">Level:</p>
												<p
													class="flex text-{traderTask.task.minPlayerLevel <= player.level
														? 'success'
														: 'error'}"
												>
													{traderTask.task.minPlayerLevel}
												</p>
											</div>
											<!-- EXP -->
											<div class="flex flex-row gap-1">
												<p class="flex text-accent">EXP:</p>
												<p class="flex text-success">
													{traderTask.task.experience}
												</p>
											</div>
											<!-- Wiki-->
											<div class="flex flex-row gap-1">
												<a href={traderTask.task.wiki} target="_blank">Wiki</a>
											</div>
										</div>
										<!-- Task objectives-->
										<div class="divider text-primary">Objectives</div>
										<div class="text-justify">
											{#each traderTask.task.TaskHasObjective as objective}
												<ul class="list-disc list-inside">
													<li class="text-accent">{objective.description}</li>
												</ul>
											{/each}
										</div>
										<!-- Keys needed for task (if any)-->
										{#if traderTask.task.TaskReqKey.length}
											<div class="divider text-primary">Required keys</div>
											<ul class="list-disc list-inside">
												{#each traderTask.task.TaskReqKey as reqKey}
													<li class="text-accent">
														1x
														<a sveltekit:prefetch href={`/item/${reqKey.key.id}`} target="_blank"
															>{reqKey.key.name}</a
														>
													</li>{/each}
											</ul>
										{/if}
										<!-- Items needed for task (if any)-->
										{#if traderTask.task.TaskReqItem.length}
											<div class="divider text-primary">Required items</div>
											{#each traderTask.task.TaskReqItem as reqItem}
												<!-- Create string with link to item-->
												<ul class="list-disc pl-4">
													<li class="text-accent">
														<div class="flex flex-row gap-1">
															{(reqItem.foundInRaid ? 'Find ' : 'Obtain ') + reqItem.count + ' '}<a
																sveltekit:prefetch
																href={`/item/${reqItem.item.id}`}
																target="_blank">{reqItem.item.name}</a
															>
															{#if reqItem.foundInRaid}
																<p class="flex text-error">
																	{'in raid'}
																</p>
															{/if}
														</div>
													</li>
												</ul>
											{/each}
										{/if}
										<!-- Rewards for completing task TODO: Add rep to DB-->
										{#if traderTask.task.TaskRewardsItem.length}
											<div class="divider text-primary">Rewards</div>
											<ul class="list-disc list-inside">
												{#each traderTask.task.TaskRewardsItem as rewItem}
													<li class="text-accent">
														{rewItem.count + 'x '}<a
															sveltekit:prefetch
															href={`/item/${rewItem.item.id}`}
															target="_blank">{rewItem.item.name}</a
														>
													</li>
												{/each}
											</ul>
										{/if}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Alert for updating tasks-->
{#if updatedPlayerTasks.length}
	<div class="alert alert-info shadow-lg sticky bottom-0 z-50">
		<!-- Show spinner while saving -->
		{#if saveLoad}
			<div class="flex justify-center w-full">
				<div class="justify-center">
					<Circle2
						size="32"
						colorOuter="#9A8866"
						colorCenter="#786849"
						colorInner="#CFA85F"
						unit="px"
					/>
				</div>
			</div>
		{:else}
			<div>
				<!-- Info icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="stroke-current flex-shrink-0 w-6 h-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<!-- Alert box text -->
				<span class="text-lg"
					>{'Remember to save ' +
						updatedPlayerTasks.length +
						' task' +
						(updatedPlayerTasks.length > 1 ? 's' : '')}</span
				>
			</div>
			<!-- Save and cancel button -->
			<div class="flex-none">
				<button class="btn btn-sm btn-neutral" on:click={() => onCancel()}>Cancel</button>
				<button class="btn btn-sm btn-success" on:click={() => onSave()}>Save</button>
			</div>
		{/if}
	</div>
{/if}
