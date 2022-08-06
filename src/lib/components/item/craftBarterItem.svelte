<script lang="ts">
	import type { Item } from '@prisma/client';

	export let item: Item;
	export let count: number;
</script>

<div class="flex flex-col items-center gap-1">
	<span class="flex justify-center"
		><a class="text-sm" sveltekit:prefetch href={`/item/${item.id}`} target="_blank"
			>{item.shortName}</a
		></span
	>
	<div class="flex justify-center w-{item.width > 2 ? 40 : item.width * 16}">
		<a sveltekit:prefetch href={`/item/${item.id}`} target="_blank">
			<img
				class="border border-primary flex justify-center"
				src={item.nameIcon}
				alt={item.name}
				title={item.name}
			/>
		</a>
	</div>
	<span class="text-accent flex justify-center">{`x${count}`}</span>
</div>
