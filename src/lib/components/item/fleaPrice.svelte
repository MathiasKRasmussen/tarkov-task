<script lang="ts">
	import { currencySymbol } from '$lib/util/itemPrice';

	export let header: string;
	export let price: number;
	export let priceColor: string;
</script>

{#if price}
	<div class="flex flex-col">
		<span class="text-accent font-bold flex justify-center">{header}</span>
		<span class="{priceColor} flex justify-center"
			>{price.toLocaleString('en-US') + currencySymbol('RUB')}</span
		>
	</div>
{/if}
