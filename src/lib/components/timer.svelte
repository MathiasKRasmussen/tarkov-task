<script>
	import { onInterval, tarkovRatio } from '$lib/util/time';

	export let callback;
	export let interval = 1000 / tarkovRatio;
	export let value = '00:00:00';

	onInterval(callback, interval);
</script>

<!-- Displays the tarkov time-->
<div class="stats shadow w-fit bg-gradient-to-b from-base-100 to-base-300">
	<div class="stat">
		<div class="stat-value text-2xl text-primary">{value}</div>
	</div>
</div>
