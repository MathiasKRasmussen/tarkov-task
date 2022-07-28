<script lang="ts">
	export let completed: number;
	export let total: number;
	export let header: string;

	const percentage: number = Math.round((completed / total) * 100);
</script>

<div class="stat place-items-center">
	<div class="stat-title text-accent text-xl">{header}</div>
	<div class="pt-6 pb-4">
		<div
			class="radial-progress cursor-help font-bold text-xl {percentage < 10
				? 'text-error'
				: percentage > 90
				? 'text-success'
				: 'text-info'}"
			style="--value:{percentage}; --thickness: 10px; --size:7rem;"
			title="{completed}/{total} items collected"
		>
			{`${percentage}%`}
		</div>
	</div>
	<div class="stat-value text-primary">{`${completed}/${total}`}</div>
</div>
