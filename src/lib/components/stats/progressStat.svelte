<script lang="ts">
	import BackToTop from '../backToTop.svelte';

	export let completed: number;
	export let total: number;
	export let header: string;
	export let thickness: number;
	export let size: number;

	const percentage: number = Math.round((completed / total) * 100);
</script>

<div class="stat place-items-center">
	<div class="stat-title text-accent text-xl">{header}</div>
	<div class="pt-6 pb-4">
		<div
			class="radial-progress cursor-help font-bold text-xl border-2 border-secondary {percentage <
			10
				? 'text-error'
				: percentage > 90
				? 'text-success'
				: 'text-info'}"
			style="--value:{percentage}; --thickness: {thickness}px; --size:{size}rem;"
			title="{completed}/{total} items collected"
		>
			{`${percentage}%`}
		</div>
	</div>
	<div class="stat-value text-primary text-3xl">
		<!-- Shortens number if in millions -->
		{`${
			Math.abs(Number(completed)) >= 1.0e6
				? (Math.abs(Number(completed)) / 1.0e6).toFixed(2) + 'M'
				: completed
		}/${
			Math.abs(Number(total)) >= 1.0e6 ? (Math.abs(Number(total)) / 1.0e6).toFixed(2) + 'M' : total
		}`}
	</div>
</div>
