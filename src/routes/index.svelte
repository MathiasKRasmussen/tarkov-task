<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
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
	let playerUpdated: boolean = false;
	let loginInput: string = '';

	getProfile();

	async function login(): Promise<boolean> {
		loadingUser = true;
		if (loginInput.indexOf(' ') >= 0) return false;
		const res = await fetch(`${$page.url.origin}/api/post/login`, {
			method: 'POST',
			body: JSON.stringify({
				loginInput
			})
		});
		let data = await res.json();
		console.log(data.success);
		if (data.success) {
			$userName = data.player.name;
			await getProfile();
		}
		loadingUser = false;
		return data.success;
	}

	// Gets all profile information
	async function getProfile() {
		await $userName;
		if ($userName) {
			try {
				const res = await fetch(`${$page.url.origin}/api/get/${$userName}`, { method: 'GET' });
				let data = await res.json();
				loadingUser = !data.success;
				header = `${$userName} - Tarkov Tasker`;
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

	async function updateData() {
		await fetch(`${$page.url.origin}/api/update/data`, {
			method: 'POST',
			body: JSON.stringify({})
		});
	}

	// Update player info
	async function updatePlayer() {
		saveLoad = true;
		try {
			const res = await fetch(`${$page.url.origin}/api/update/player`, {
				method: 'POST',
				body: JSON.stringify({
					player,
					newLevel,
					newVersion,
					newTraderLevels
				})
			});
			let progressData = await res.json();
			await getProfile();
			saveLoad = !progressData.success;
			playerUpdated = true;
		} catch (error) {
			console.log('An error occured', error);
		}
	}

	// Resets any changes made
	function cancelPlayerUpdate() {
		newVersion = player.version;
		newLevel = player.level;
		newTraderLevels = createTempPlayerTrader(traders);
	}
</script>

<svelte:head>
	<title>{header}</title>
	<meta name="description" content="Home page" />
</svelte:head>

<!-- When loading the user -->
{#if loadingUser}
	<div class="flex flex-col justify-center items-center pt-60">
		<Circle2 size="120" colorOuter="#9A8866" colorCenter="#786849" colorInner="#CFA85F" unit="px" />
		<p class="pt-8"><i>Just loading a bit</i></p>
	</div>
	<!-- If a user is logged in -->
{:else if $userName}
	<button class="btn btn-primary" on:click={updateData}>Button</button>
	<div class="flex flex-col w-full justify-center gap-4">
		<div class="flex flex-row justify-center items-center">
			<h1 class="p-4 font-bold">Player Profile</h1>
			<!-- Update profile button -->
			<label
				for="player-setting-modal"
				class="btn btn-ghost modal-button modal-open w-16"
				on:click={() => (playerUpdated = false)}
			>
				<img src={`/static/svg/cogwheel.svg`} alt={`Update player`} title={`Update player`} />
			</label>
		</div>

		<!-- Header player info -->
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
	<!-- If no user logged in -->
{:else}
	<h1 class="pb-4 font-bold">Welcome</h1>
	<!-- Login to existing player -->
	<div class="flex flex-col gap-8">
		<div class="hero bg-base-200 rounded-3xl">
			<div class="hero-content flex-col lg:flex-row-reverse w-full gap-32">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="py-6">Already have a player? Login now!</p>
				</div>
				<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div class="card-body">
						<div class="form-control">
							<label class="label" for="login">
								<span class="label-text text-primary font-bold text-xl">Player name</span>
							</label>
							<input
								id="login"
								type="text"
								placeholder="Name"
								class="input input-bordered text-accent placeholder-accent placeholder-opacity-40"
								bind:value={loginInput}
							/>
						</div>
						<div class="form-control mt-6">
							<label for="login-modal" class="btn modal-button btn-info" on:click={login}
								>Login</label
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Register new player -->
		<div class="hero bg-base-200 rounded-3xl">
			<div class="hero-content flex-col lg:flex-row w-full gap-32">
				<div class="text-center lg:text-left pl-6">
					<h1 class="text-5xl font-bold">Register!</h1>
					<p class="py-6">Don't have a player yet? Register now!</p>
				</div>
				<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div class="card-body">
						<div class="form-control">
							<label for="register" class="label">
								<span class="label-text text-primary font-bold text-xl">Player name</span>
							</label>
							<input
								id="register"
								type="text"
								placeholder="Name"
								class="input input-bordered text-accent placeholder-accent placeholder-opacity-40"
							/>
						</div>
						<div class="form-control mt-6">
							<label for="login-modal" class="btn modal-button btn-success">Register</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Use test player -->
		<div class="hero bg-base-200 rounded-3xl">
			<div class="hero-content text-center">
				<div class="max-w-xl p-4">
					<h1 class="text-5xl font-bold">Try Tarkov Tasker!</h1>
					<p class="py-6">If you don't want to create your own player you can use a test player</p>
					<button class="btn btn-accent">Try now</button>
				</div>
			</div>
		</div>
	</div>

	<input type="checkbox" id="login-modal" class="modal-toggle" />
	<label for="login-modal" class="modal cursor-pointer">
		<label class="modal-box relative" for="">
			<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
		</label>
	</label>
{/if}

<!-- Modal for updating profile -->
{#if createModal}
	<input type="checkbox" id="player-setting-modal" class="modal-toggle" />
	<div class="modal flex flex-col">
		<div class="modal-box flex flex-col w-5/6 max-w-5xl items-center p-8">
			<!-- When user saved show close button -->
			{#if playerUpdated}
				<h3 class="font-bold text-2xl text-primary">Player Updated</h3>
				<div class="modal-action">
					<label for="player-setting-modal" class="btn btn-md btn-info w-24">Close</label>
				</div>
				<!-- Update player info content-->
			{:else}
				<h3 class="font-bold text-2xl text-primary">Update Player</h3>
				<div class="divider" />
				<div class="grid grid-cols-2 place-items-center w-full">
					<!-- Game edition -->
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
					<!-- Player level -->
					<div class="flex flex-col w-3/4 items-center gap-1">
						<h4 class="text-accent">Player level</h4>
						<Counter bind:count={newLevel} />
					</div>
				</div>
				<div class="divider" />
				<!-- Trader levels -->
				<h4 class="text-accent justify-center pb-4">Traders</h4>
				<div class="grid grid-cols-8 gap-4 place-items-center">
					{#each newTraderLevels as traderLevel}
						<div class="gap-4 flex flex-col items-center">
							<TraderIcon trader={traderLevel.trader} level={traderLevel.level} size={20} />
							<!-- Trader level range bar -->
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
						<div class="flex flex-row gap-6 justify-center">
							<!-- Cancel button reverts changes -->
							<div class="modal-action">
								<label
									for="player-setting-modal"
									class="btn btn-md btn-neutral w-24"
									on:click={cancelPlayerUpdate}>Cancel</label
								>
							</div>
							<!-- Save button updates changes -->
							<div class="modal-action">
								<label
									for="player-setting-modal"
									class="btn btn-md btn-success w-24"
									on:click={updatePlayer}>Save</label
								>
							</div>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.level {
		color: #8c8b8a;
	}
</style>
