<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import HeaderStats from '$lib/components/stats/headerStats.svelte';
	import OverallStats from '$lib/components/stats/overallStats.svelte';
	import TraderStats from '$lib/components/stats/traderStats.svelte';
	import TraderIcon from '$lib/components/traderIcon.svelte';
	import Counter from '$lib/Counter.svelte';
	import { createTempPlayerTrader, versionList } from '$lib/util/player';
	import { getTraderRomanList } from '$lib/util/trader';
	import type { HideoutStation, Player, Trader } from '@prisma/client';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../stores/user';
	let header: string = 'Tarkov Tasker';
	let loadingUser: boolean = true;
	let player: Player;
	let traders: Trader[];
	let stations: HideoutStation[];
	const romanLevels: string[] = getTraderRomanList();
	let gameVersions: { value: number; name: string }[] = versionList();
	let createModal: boolean = false;
	let newVersion: number = 1;
	let newLevel: number = 0;
	let newTraderLevels: { trader: Trader; level: number }[] = [];
	let saveLoad: boolean = false;

	getProfile();

	async function getProfile() {
		await $userName;
		if ($userName) {
			try {
				const res = await fetch(`${$page.url.origin}/api/get/${$userName}`, { method: 'GET' });
				let data = await res.json();
				loadingUser = !data.success;
				header += `: ${$userName}`;
				player = data.player;
				traders = data.traders;
				stations = data.stations;
				createModal = true;
				newVersion = player.version;
				newLevel = player.level;
				newTraderLevels = createTempPlayerTrader(traders);
			} catch (error) {
				console.log('An error occured loading your player', error);
			}
		}
		loadingUser = false;
	}

	function hasUpdates(): boolean {
		if (newVersion !== player.version) return true;
		if (newLevel !== player.level) return true;
		traders.forEach((trader) => {
			newTraderLevels.forEach((newTrader) => {
				if (trader.id === newTrader.trader.id) {
					if (trader.PlayerHasTrader[0].level !== newTrader.level) return true;
				}
			});
		});
		return false;
	}
</script>

<svelte:head>
	<title>{header}</title>
	<meta name="description" content="Home page" />
</svelte:head>

{#if loadingUser}
	<div class="flex flex-col justify-center items-center pt-60">
		<Circle2 size="120" colorOuter="#9A8866" colorCenter="#786849" colorInner="#CFA85F" unit="px" />
		<p class="pt-8"><i>Just loading a bit</i></p>
	</div>
{:else if $userName}
	<div class="flex flex-col w-full justify-center gap-4">
		<label for="player-setting-modal" class="btn modal-button">open modal</label>

		<!-- Header player info -->
		<h1 class="p-4 font-bold">Player Profile</h1>
		<HeaderStats {player} />

		<!-- Overall stats -->
		<div class="divider text-primary"><h2 class="level text-lg">Overall</h2></div>
		<OverallStats {traders} {stations} />

		<!-- Trader Stats -->
		<div class="divider text-primary"><h2 class="level text-lg">Traders</h2></div>
		<div class="grid grid-cols-4 justify-center gap-4">
			{#each traders as trader}
				<TraderStats {trader} />
			{/each}
		</div>
	</div>
{:else}
	<h1>Create Player</h1>
{/if}

{#if createModal}
	<input type="checkbox" id="player-setting-modal" class="modal-toggle" />
	<div class="modal flex flex-col">
		<div class="modal-box flex flex-col w-5/6 max-w-5xl items-center p-8">
			<h3 class="font-bold text-2xl text-primary">Update Player</h3>

			<div class="divider" />
			<div class="grid grid-cols-2 place-items-center w-full">
				<div class="flex flex-col w-3/4 items-center gap-2">
					<h4 class="text-accent">Game edition</h4>
					<span class="text-xs">{gameVersions[newVersion - 1].name}</span>
					<input
						type="range"
						min="1"
						max="4"
						bind:value={newVersion}
						step="1"
						class="range range-primary range-sm"
					/>
				</div>
				<div class="flex flex-col w-3/4 items-center gap-1">
					<h4 class="text-accent">Player level</h4>
					<Counter bind:count={newLevel} />
				</div>
			</div>
			<div class="divider" />
			<h4 class="text-accent justify-center pb-4">Traders</h4>
			<div class="grid grid-cols-8 gap-4 place-items-center">
				{#each newTraderLevels as traderLevel}
					<div class="gap-4 flex flex-col items-center">
						<TraderIcon trader={traderLevel.trader} level={traderLevel.level} size={20} />
						<div class="pt-2">
							<input
								type="range"
								min="1"
								max="4"
								step={traderLevel.trader.name === 'Fence' ? 3 : 1}
								bind:value={traderLevel.level}
								class="range range-xs range-accent"
							/>
							<!-- Show levels under range bar-->
							<div class="w-full flex justify-between text-xs px-2">
								<!-- Fence only can be level 1 or 4-->
								{#if traderLevel.trader.name === 'Fence'}
									<span class="justify-center text-accent">{romanLevels[0]}</span>
									<span class="justify-center text-accent"
										>{romanLevels[romanLevels.length - 1]}</span
									>
								{:else}
									{#each romanLevels as romanLevel}
										<span class="justify-center text-accent">{romanLevel}</span>
									{/each}
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="pt-12 w-full">
				<div class="alert alert-info shadow-lg justify-center">
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
						<!-- Save and cancel button -->
						<div class="flex-none">
							<div class="modal-action">
								<label for="player-setting-modal" class="btn btn-md btn-neutral">Cancel</label>
							</div>
							<button class="btn btn-md btn-success">Save</button>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.level {
		color: #8c8b8a;
	}
</style>
