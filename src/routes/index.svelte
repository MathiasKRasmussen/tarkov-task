<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import ProfileHeader from '$lib/components/stats/profileHeader.svelte';
	import TraderStats from '$lib/components/stats/traderStats.svelte';
	import Counter from '$lib/Counter.svelte';
	import type { Player, Trader } from '@prisma/client';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../stores/user';
	let header: string = 'Tarkov Tasker';
	let loadingUser: boolean = true;
	let player: Player;
	let traders: Trader[];

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
{:else}
	{#if $userName}
		<div class="flex flex-col w-full justify-center gap-4">
			<ProfileHeader {player} />

			<div class="divider text-primary"><h2 class="level">Traders</h2></div>
			<div class="grid grid-cols-4 justify-center gap-4">
				{#each traders as trader}
					<TraderStats {trader} />
				{/each}
			</div>
		</div>
	{:else}
		<h1>Create Player</h1>
	{/if}

	<Counter />
{/if}

<style>
	.level {
		color: #8c8b8a;
	}
</style>
