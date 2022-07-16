<script lang="ts">
	import { page, navigating } from '$app/stores';

	const title: string = 'TARKOV TASKER';
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<a class="btn btn-ghost text-primary text-2xl font-bold" sveltekit:prefetch href={`/`}
				>{title}</a
			>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal p-0">
				<li><a class="text-primary" sveltekit:prefetch href={`/items`}>Items</a></li>
				<li><a class="text-primary" sveltekit:prefetch href={`/`}>Parent</a></li>
				<li><a class="text-primary" sveltekit:prefetch href={`/`}>Item 3</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a class="btn" sveltekit:prefetch href={`/`}>Get started</a>
		</div>
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
