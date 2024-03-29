<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import ErrorAlert from '$lib/components/errorAlert.svelte';
	import HeaderStats from '$lib/components/stats/headerStats.svelte';
	import OverallStats from '$lib/components/stats/overallStats.svelte';
	import TraderStats from '$lib/components/stats/traderStats.svelte';
	import TraderIcon from '$lib/components/traderIcon.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import { createTempPlayerTrader, versionList } from '$lib/util/player';
	import { getTraderRomanList } from '$lib/util/trader';
	import type { HideoutStation, Player, Trader } from '@prisma/client';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../stores/user';
	import { formatHMS, realTimeToTarkovTime } from '$lib/util/time';
	import Timer from '$lib/components/timer.svelte';

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
	let registerInput: string = '';
	let showError: boolean = false;
	let errorMessage: string = '';
	let playerFaction: string = 'USEC';
	let loadingMessage: string = 'Just loading a bit';

	getProfile();

	function resetLoadingMessage() {
		loadingMessage = 'Just loading a bit';
	}

	// Pressing enter when logging in
	const onLoginKeyPress = (e) => {
		if (e.charCode === 13) login();
	};
	// Pressing enter when registering in
	const onRegisterKeyPress = (e) => {
		if (e.charCode === 13) register();
	};

	// Change faction for registering
	function changeFaction() {
		if (playerFaction === 'USEC') playerFaction = 'BEAR';
		else playerFaction = 'USEC';
	}

	// Clicking the "Try now" button logs the user into a test player
	function testUserLogin() {
		loginInput = 'Player123456';
		login();
	}

	// Login to player
	async function login() {
		loadingMessage = 'Logging in';
		loadingUser = true;
		// If input has white space
		if (loginInput.indexOf(' ') >= 0) {
			showError = true;
			errorMessage = 'Cannot have white space in your player name';
		} else {
			// Call login endpoint
			const res = await fetch(`${$page.url.origin}/api/post/login`, {
				method: 'POST',
				body: JSON.stringify({
					loginInput
				})
			});
			// If login returns successful, save player name to localstorage
			let data = await res.json();
			if (data.success) {
				$userName = data.player.name;
				await getProfile();
				// Else show error for not finding player
			} else {
				errorMessage = 'Player was not found';
				showError = true;
			}
		}
		loadingUser = false;
		resetLoadingMessage();
	}

	// On clicking register
	async function register() {
		loadingMessage = 'Registering player (This will take a minute)';
		loadingUser = true;
		// If input has white space
		if (registerInput.indexOf(' ') >= 0) {
			showError = true;
			errorMessage = 'Cannot have white space in your player name';
		} else {
			const res = await fetch(`${$page.url.origin}/api/post/register`, {
				method: 'POST',
				body: JSON.stringify({
					registerInput,
					playerFaction,
					newVersion
				})
			});
			// If register returns successful, a new player is created and saved to localstorage
			let data = await res.json();
			if (data.success) {
				$userName = data.player.name;
				await getProfile();
				// Else show error for player name existing
			} else {
				showError = true;
				errorMessage = 'Player with this name already exists';
			}
		}
		loadingUser = false;
		resetLoadingMessage();
	}

	// Gets all profile information
	async function getProfile() {
		await $userName;
		loadingMessage = 'Retrieving player';
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

	// Handling current tarkov time
	let leftTime = formatHMS(realTimeToTarkovTime(new Date(), true));
	let rightTime = formatHMS(realTimeToTarkovTime(new Date(), false));
	const handleTick = () => {
		leftTime = formatHMS(realTimeToTarkovTime(new Date(), true));
		rightTime = formatHMS(realTimeToTarkovTime(new Date(), false));
	};
</script>

<svelte:head>
	<title>{header}</title>
	<meta name="description" content="Home page" />
</svelte:head>

<!-- When loading the user -->
{#if loadingUser}
	<div class="flex flex-col justify-center items-center pt-60">
		<Circle2 size="120" colorOuter="#9A8866" colorCenter="#786849" colorInner="#CFA85F" unit="px" />
		<p class="pt-8"><i>{loadingMessage}</i></p>
	</div>
	<!-- If a user is logged in -->
{:else if $userName}
	<div class="flex flex-col w-full gap-4">
		<div class="flex flex-row items-center justify-center gap-40">
			<!-- Left time -->
			<Timer callback={handleTick} value={leftTime} />
			<div class="flex flex-row items-center">
				<h1 class="p-4 font-bold">Player Profile</h1>
				<!-- Update profile button -->
				<label
					for="player-setting-modal"
					class="btn btn-ghost modal-button modal-open w-16"
					on:click={() => (playerUpdated = false)}
				>
					<img
						src={`https://svgshare.com/i/m3U.svg`}
						alt={`Update player`}
						title={`Update player`}
					/>
				</label>
			</div>
			<!-- Right time -->
			<Timer callback={handleTick} value={rightTime} />
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
	<div class="flex flex-col pt-6 gap-8">
		<!-- Use test player -->
		<div class="hero bg-gradient-to-b from-base-100 to-base-300 rounded-3xl">
			<div class="hero-content text-center">
				<div class="max-w-xl p-4">
					<h1 class="text-5xl font-bold">Try Tarkov Tasker!</h1>
					<p class="py-6">If you don't want to create your own player you can use a test player</p>
					<button class="btn btn-accent" on:click={testUserLogin}>Try now</button>
				</div>
			</div>
		</div>

		<!-- Login to existing player -->
		<div class="hero bg-gradient-to-b from-base-100 to-base-300 rounded-3xl">
			<div class="hero-content flex-col lg:flex-row-reverse w-full gap-32">
				<!-- Text -->
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold">Login now!</h1>
					<p class="py-6">Already have a player? Login now!</p>
				</div>
				<!-- Input -->
				<div
					class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-base-100 to-base-200"
				>
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
								on:keypress={onLoginKeyPress}
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
		<div class="hero bg-gradient-to-b from-base-100 to-base-300 rounded-3xl">
			<div class="hero-content flex-col lg:flex-row w-full gap-32">
				<!-- Text -->
				<div class="text-center lg:text-left pl-6">
					<h1 class="text-5xl font-bold">Register!</h1>
					<p class="py-6">Don't have a player yet? Register now!</p>
				</div>
				<div
					class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-base-100 to-base-200"
				>
					<div class="card-body">
						<div class="flex flex-col gap-4">
							<!-- Name -->
							<div class="form-control">
								<label for="register" class="label">
									<span class="label-text text-primary font-bold text-xl">Player name</span>
								</label>
								<input
									id="register"
									type="text"
									placeholder="Name"
									class="input input-bordered text-accent placeholder-accent placeholder-opacity-40"
									bind:value={registerInput}
									on:keypress={onRegisterKeyPress}
								/>
							</div>
							<!-- Game edition -->
							<div class="flex justify-center">
								<div class="flex flex-col w-3/4 justify-center items-center gap-2">
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
							</div>
							<div class="flex justify-center">
								<div class="form-control flex flex-row gap-8">
									<label class="label cursor-pointer flex flex-col gap-2">
										<h4 class="text-accent">Faction</h4>
										<span class="label-text">{playerFaction}</span>
										<input
											type="checkbox"
											class="toggle toggle-primary"
											on:change={changeFaction}
											checked
										/>
									</label>
								</div>
							</div>
						</div>
						<div class="form-control mt-6">
							<label for="login-modal" class="btn modal-button btn-success" on:click={register}
								>Register</label
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{#if showError}
		<ErrorAlert message={errorMessage} />
	{/if}
{/if}

<!-- Modal for updating profile -->
{#if createModal}
	<input type="checkbox" id="player-setting-modal" class="modal-toggle" />
	<div class="modal flex flex-col ">
		<div
			class="modal-box flex flex-col w-5/6 max-w-5xl items-center p-8 bg-gradient-to-b from-base-100 to-base-300"
		>
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
