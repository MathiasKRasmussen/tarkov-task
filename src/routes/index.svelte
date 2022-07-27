<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Counter from '$lib/Counter.svelte';
	import { levelIcon } from '$lib/util/level';
	import type { Player } from '@prisma/client';
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';
	import { userName } from '../stores/user';
	let header: string = 'Tarkov Tasker';
	let loadingUser: boolean = true;
	let player: Player;

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
		<div class="flex flex-col w-full justify-center">
			<div class="flex flex-row items-center gap-2 justify-center">
				<div class="avatar flex flex-row">
					<div class="rounded w-16">
						<img src={levelIcon(player.level)} alt={'hmm'} title={'hmm'} />
					</div>
				</div>
				<h1 class="font-bold level">{$userName}</h1>
			</div>
			<div class="flex flex-row level font-bold text-3xl">
				{player.level}
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
