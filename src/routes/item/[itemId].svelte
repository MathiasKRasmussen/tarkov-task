<script lang="ts">
	import { bestTraderToSell, currencySymbol, getFleaCurrentPrice } from '$lib/util/itemPrice';

	import type { Item, Trader } from '@prisma/client';

	export let item: Item;
	export let traders: Trader[];
	export let priceData: {
		low24hPrice: number;
		avg24hPrice: number;
		high24hPrice: number;
		sellFor: { price: number; currency: string; vendor: { name: string } }[];
		buyFor: { price: number; currency: string; vendor: { name: string } }[];
	};

	const fleaPrice: number = getFleaCurrentPrice(priceData.sellFor);
	let bestOffer: { price: number; currency: string; vendor: { name: string } };
	let bestSellTrader: Trader;

	function canBeBoughtFromTrader(): boolean {
		if (!priceData.buyFor.length) return false;
		else if (priceData.buyFor.length === 1 && priceData.buyFor[0].vendor.name === 'Flea Market')
			return false;
		return true;
	}

	function traderPriceString(offer: {
		price: number;
		currency: string;
		vendor: { name: string };
	}): string {
		if (offer.currency === 'USD') {
			return currencySymbol(offer.currency) + offer.price;
		}
		return offer.price + currencySymbol(bestOffer.currency);
	}

	function getTrader(name: string): Trader {
		let trader: Trader;
		traders.forEach((t) => {
			if (t.name === name) trader = t;
		});
		return trader;
	}

	function canBeFlea(): boolean {
		let canBeFlea: boolean = true;
		item.ItemHasType.forEach((itemHasType) => {
			if (itemHasType.type.name === 'noFlea') canBeFlea = false;
		});
		return canBeFlea;
	}

	function setTraderToSell() {
		bestOffer = bestTraderToSell(priceData.sellFor);
		traders.forEach((trader) => {
			if (trader.name === bestOffer.vendor.name) bestSellTrader = trader;
		});
	}
	setTraderToSell();
</script>

<h1>{item.name}</h1>
<h1>{priceData.avg24hPrice}</h1>

<div class="flex flex-row gap-14 justify-center">
	<div class="card w-3/5 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title justify-center flex">Prices</h2>
			<!-- Sell to trader -->
			<div class="divider">
				<span class="flex justify-center text-primary">Sell</span>
			</div>
			<div class="flex flex-row gap-1">
				<div class="avatar flex">
					<div class="rounded w-6">
						<img src={bestSellTrader.image} alt={bestSellTrader.name} title={bestSellTrader.name} />
					</div>
				</div>
				<span class="text-accent font-bold w-1/2">{bestSellTrader.name}</span>
				<span class="text-accent flex justify-end w-full">{traderPriceString(bestOffer)}</span>
			</div>

			<!-- Buy to trader -->
			{#if canBeBoughtFromTrader()}
				<div class="divider">
					<span class="flex justify-center text-primary">Buy</span>
				</div>
				{#each priceData.buyFor as buyOffer}
					{#if buyOffer.vendor.name !== 'Flea Market'}
						<div class="flex flex-row gap-1 justify-center">
							<div class="avatar flex">
								<div class="rounded w-6">
									<img
										src={getTrader(buyOffer.vendor.name).image}
										alt={getTrader(buyOffer.vendor.name).name}
										title={getTrader(buyOffer.vendor.name).name}
									/>
								</div>
							</div>
							<span class="text-accent font-bold w-1/2">{getTrader(buyOffer.vendor.name).name}</span
							>
							<span class="text-accent flex justify-end w-full">{traderPriceString(buyOffer)}</span>
						</div>
					{/if}
				{/each}
			{/if}

			<div class="divider">
				<h3 class="text-primary font-bold text-lg justify-center flex">Flea market</h3>
			</div>
			{#if canBeFlea()}
				<div class="flex">
					<span class="text-success font-bold w-1/2">24h Avg</span>
					<span class="text-accent flex justify-end w-full"
						>{priceData.avg24hPrice + currencySymbol('RUB')}</span
					>
				</div>
				<div class="flex">
					<span class="text-success font-bold w-1/2">24h Top</span>
					<span class="text-accent flex justify-end w-full"
						>{priceData.high24hPrice + currencySymbol('RUB')}</span
					>
				</div>
				<div class="flex">
					<span class="text-success font-bold w-1/2">24h Low</span>
					<span class="text-accent flex justify-end w-full"
						>{priceData.low24hPrice + currencySymbol('RUB')}</span
					>
				</div>
			{:else}
				<span class="text-error justify-center flex">Banned from flea</span>
			{/if}
			<div class="divider">
				<h3 class="text-primary font-bold text-lg justify-center flex">Misc</h3>
			</div>
			<span />
		</div>
	</div>

	<!-- Image card -->
	<div>
		<div class="card w-64 bg-base-100 shadow-xl">
			<!-- Image with icon on top -->
			<figure class="h-1/4">
				<img src={item.image} alt="Image of {item.name}" title={item.name} />
			</figure>
			<img
				class="absolute top-0 right-0 mt-4 mr-4 hover:shadow-outline"
				src={item.nameIcon}
				alt="{item.name} icon"
				title={item.name}
			/>
			<!-- Item image info -->
			<div class="card-body pt-4">
				<h2 class="flex justify-center text-primary font-bold text-lg">{item.name}</h2>
				<span class="flex justify-center text-accent">{item.shortName}</span>
				<div class="card-actions justify-end">
					<a
						class="btn btn-outline btn-primary btn-sm"
						role="button"
						href={item.wiki}
						target="_blank">Wiki</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
