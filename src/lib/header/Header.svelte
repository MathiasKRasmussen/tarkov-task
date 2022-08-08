<script lang="ts">
	import { userName } from '../../stores/user';
	const title: string = 'TARKOV TASKER';

	function logout() {
		$userName = '';
	}
</script>

<header class="sticky top-0 z-50">
	<div class="navbar bg-secondary border-b-[1px] border-primary">
		<div class="navbar-start">
			<a class="btn btn-ghost text-primary text-2xl font-bold" sveltekit:prefetch href={`/`}
				>{title}</a
			>
		</div>
		{#if $userName}
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal p-0">
					<li>
						<a class="text-primary font-bold" sveltekit:prefetch href={`/${$userName}/items`}
							>Items</a
						>
					</li>
					<li>
						<a class="text-primary font-bold" sveltekit:prefetch href={`/${$userName}/tasks`}
							>Tasks</a
						>
					</li>
					<li>
						<a class="text-primary font-bold" sveltekit:prefetch href={`/${$userName}/hideout`}
							>Hideout</a
						>
					</li>
					<li>
						<a class="text-primary font-bold" sveltekit:prefetch href={`/${$userName}/keys`}>Keys</a
						>
					</li>
				</ul>
			</div>
			<div class="navbar-end pr-4">
				<a class="text-primary font-bold" sveltekit:prefetch href={`/`} on:click={logout}>Logout</a>
			</div>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
</style>
