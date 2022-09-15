<script lang="ts">
	import { page } from '$app/stores';
	import NoAccess from '$lib/components/noAccess.svelte';
	import SaveAlert from '$lib/components/saveAlert.svelte';
	import TraderIcon from '$lib/components/traderIcon.svelte';
	import { getTraderLevel } from '$lib/util/trader';
	import type { Player, PlayerHasTasks, TaskOnMap, Trader } from '@prisma/client';
	import { userName } from '../../stores/user';

	const header: string = 'Tasks';

	export let traders: Trader[];
	export let playerHasTasks: PlayerHasTasks[];
	export let player: Player;
	export let urlName: string = '';
	let updatedPlayerTasks: PlayerHasTasks[] = [];
	let updateCheckBoxes: boolean = false;
	let saveLoad: boolean = false;

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

	// When saving the 'playerTasks' endpoint is called and updates the db
	async function onSave(): Promise<void> {
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
	<title>Tasks - Tarkov Tasker</title>
	<meta name="description" content="Tasks" />
</svelte:head>

<div>
	{#if urlName !== $userName}
		<NoAccess />
	{:else}
		<h1 class="pt-2 pb-4 font-bold" id={traders[0].name}>{header}</h1>
		<!-- Quick link to traders -->
		<div class="flex flex-row gap-10 justify-center ">
			<div class="w-40 flex flex-col ">
				<!-- Side bar toast -->
				<div class="toast toast-start toast-middle sticky top-20 z-10">
					<div
						class="alert alert-primary border border-primary sticky top-0 z-10 p-2 justify-center "
					>
						<div
							class="grid grid-cols-1 gap-8 place-items-center p-2 bg-gradient-to-b from-base-100 to-base-300"
						>
							{#each traders as trader}
								<div class="flex flex-col items-center border border-primary">
									<TraderIcon {trader} level={getTraderLevel(trader)} href={`#${trader.name}`} />
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Main content -->
			<div class="flex flex-col justify-center">
				<div>
					{#each traders as trader, index}
						<div class={index === 0 ? 'p-0' : 'p-8'} id={index === 0 ? '' : trader.name} />
						<div class="overflow-x-auto">
							<div class="card shadow-xl">
								<!-- Card header: Trader Icon -->
								<div
									class="bg-gradient-to-b from-primary to-[#776849] flex flex-row items-center pt-3 p-4"
								>
									<!-- Avatar of trader with level indicator-->
									<TraderIcon {trader} level={getTraderLevel(trader)} />
									<!-- Trader name-->
									<h2 class="pl-6 card-title text-secondary font-bold text-3xl">{trader.name}</h2>
								</div>

								{#each getTraderTasks(trader) as traderTask, index}
									<div
										class="card border border-base-300 even:bg-base-100 odd:bg-base-200 rounded-none"
									>
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
												class="collapse collapse-plus bg-base-{index % 2 === 0
													? '100'
													: '200'} w-full pr-12"
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
																{#if objective.optional}
																	<li class="text-accent">
																		(optional) <i class="text-accent">{objective.description}</i>
																	</li>
																{:else}
																	<li class="text-accent">{objective.description}</li>
																{/if}
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
																	<a sveltekit:prefetch href={`/${$userName}/item/${reqKey.key.id}`}
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
																		{(reqItem.foundInRaid ? 'Find ' : 'Obtain ') +
																			reqItem.count +
																			' '}<a
																			sveltekit:prefetch
																			href={`/${$userName}/item/${reqItem.item.id}`}
																			>{reqItem.item.name}</a
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
																		href={`/${$userName}/item/${rewItem.item.id}`}
																		>{rewItem.item.name}</a
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
		</div>
	{/if}
</div>

<!-- Alert for saving tasks-->
{#if updatedPlayerTasks.length}
	<SaveAlert
		{saveLoad}
		elementsToSave={updatedPlayerTasks.length}
		onCancel={() => onCancel()}
		onSave={() => onSave()}
	/>
{/if}
