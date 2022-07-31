<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import HeaderStats from '$lib/components/stats/headerStats.svelte';
	import OverallStats from '$lib/components/stats/overallStats.svelte';
	import TraderStats from '$lib/components/stats/traderStats.svelte';
	import { versionList } from '$lib/util/player';
	import type { HideoutStation, Player, Trader } from '@prisma/client';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../stores/user';
	let header: string = 'Tarkov Tasker';
	let loadingUser: boolean = true;
	let player: Player;
	let traders: Trader[];
	let stations: HideoutStation[];
	const versions = versionList();
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
				console.log(player);
			} catch (error) {
				console.log('An error occured loading your player', error);
			}
		}
		loadingUser = false;
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

<input type="checkbox" id="player-setting-modal" class="modal-toggle" />
<label for="player-setting-modal" class="modal cursor-pointer">
	<label class="modal-box relative flex flex-col items-center" for="">
		<h3 class="text-lg font-bold">Update Player</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="form-control w-full max-w-xs">
			<label class="label">
				<span class="label-text" title="sdf" alt="fsd">Escape from Tarkov edition </span>
			</label>
			<select class="select select-primary ">
				{#each versions as version}
					<option selected={player ? player.version === version.value : false}
						>{version.name}</option
					>
				{/each}
			</select>
		</div>
	</label>
</label>

<style>
	.level {
		color: #8c8b8a;
	}
</style>
