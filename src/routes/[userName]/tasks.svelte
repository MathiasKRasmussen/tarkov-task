<script lang="ts">
	const header: string = 'Tasks';
	import { userName } from '../../stores/user';
</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Tasks" />
</svelte:head>

<div>
	<h1 class="p-4 font-bold">{header}</h1>
	<p>{$userName}</p>
</div>
