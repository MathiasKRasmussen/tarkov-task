<script lang="ts">
	export let searchText: string;
	export let searchForItems = () => {};
</script>

<div class="pb-2">
	<div class="flex relative">
		<!-- Search icon-->
		<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
			<svg
				aria-hidden="true"
				class="w-5 h-5 text-primary"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					opacity={0.75}
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</div>
		<!-- Search input -->
		<input
			type="text"
			id="default-search"
			class="block p-3 pl-10 w-full text-md text-primary bg-base-100 rounded-l-lg input-bordered input-primary border border-secondary placeholder-primary placeholder-opacity-50"
			placeholder="Search Items"
			required
			bind:value={searchText}
			on:input={() => searchForItems()}
			on:click={() => (searchText = '')}
		/>
		<button
			class="btn btn-square rounded-none rounded-r-lg btn-primary"
			disabled={searchText.replace(/\s/g, '').length === 0}
			on:click={() => (searchText = '')}
			title="Clear input"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/></svg
			>
		</button>
	</div>
</div>
