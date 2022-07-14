<script lang="ts">
	import { browser, dev } from '$app/env';
	import { page } from '$app/stores';
	import type { PlayerHasTasks } from '@prisma/client';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	export let playerTasks: PlayerHasTasks[];
	console.log(playerTasks[0].task);

	async function onPost() {
		try {
			const res = await fetch(`${$page.url.origin}/api/formatData/stringTypes`, {
				method: 'POST'
			});
			//progressData = await res.json()
			console.log('uploaded  sucessfully');
		} catch (error) {
			console.log('An error occured', error);
		}
	}
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="flex">
	<button class="btn btn-primary" on:click={onPost}>Post</button>
</div>

<div>
	<h1>About this app</h1>
	<div class="overflow-x-auto">
		<table class="table table-zebra w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Completed</th>
					<th>Task</th>
					<th>Trader</th>
					<th>Items</th>
				</tr>
			</thead>
			<tbody>
				{#each playerTasks as playerTask, index}
					<!-- row 1 -->
					<tr>
						<td
							><input
								type="checkbox"
								checked={playerTask.completed}
								class="checkbox checkbox-primary"
							/></td
						>
						<td>{playerTask.task.name}</td>
						<td>{playerTask.task.trader.name}</td>
						<td>
							{#each playerTask.task.TaskReqItem as item}
								{item.item.name}
							{/each}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
