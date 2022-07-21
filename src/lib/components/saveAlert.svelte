<script lang="ts">
	import Circle2 from 'svelte-loading-spinners/dist/ts/Circle2.svelte';

	export let saveLoad: boolean;
	export let elementsToSave: number;
	export let onCancel = () => {};
	export let onSave = () => {};
</script>

<div class="alert alert-info shadow-lg sticky bottom-0 z-50">
	<!-- Show spinner while saving -->
	{#if saveLoad}
		<div class="flex justify-center w-full">
			<div class="justify-center">
				<Circle2
					size="32"
					colorOuter="#9A8866"
					colorCenter="#786849"
					colorInner="#CFA85F"
					unit="px"
				/>
			</div>
		</div>
	{:else}
		<div>
			<!-- Info icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current flex-shrink-0 w-6 h-6"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<!-- Alert box text -->
			<span class="text-lg"
				>{`Remember to save ${elementsToSave} update${elementsToSave > 1 ? 's' : ''}`}</span
			>
		</div>
		<!-- Save and cancel button -->
		<div class="flex-none">
			<button class="btn btn-sm btn-neutral" on:click={onCancel}>Cancel</button>
			<button class="btn btn-sm btn-success" on:click={onSave}>Save</button>
		</div>
	{/if}
</div>
