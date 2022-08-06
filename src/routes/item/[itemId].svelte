<script lang="ts">
	import CraftBarterItem from '$lib/components/item/craftBarterItem.svelte';
	import FleaPrice from '$lib/components/item/fleaPrice.svelte';
	import { getRequiredTaskItems } from '$lib/util/formatItems';
	import { hideoutImage } from '$lib/util/hideout';
	import {
		bestTraderToSell,
		convertCurrency,
		currencySymbol,
		fleaProfit,
		getFleaCurrentPrice
	} from '$lib/util/itemPrice';
	import { iconWidth } from '$lib/util/items';
	import { timeString } from '$lib/util/time';

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
	let profit: number = 0;

	function setProfit() {
		if (bestOffer) {
			profit = fleaProfit(priceData.avg24hPrice, bestOffer.price, bestOffer.currency);
		}
	}

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
			return (
				currencySymbol(offer.currency) +
				offer.price +
				' ~ ' +
				convertCurrency(offer.price, offer.currency, 'RUB').toLocaleString('en-US') +
				currencySymbol('RUB')
			);
		} else if (offer.currency === 'EUR') {
			return (
				offer.price.toLocaleString('en-US') +
				currencySymbol(offer.currency) +
				' ~ ' +
				convertCurrency(offer.price, offer.currency, 'RUB').toLocaleString('en-US') +
				currencySymbol('RUB')
			);
		}
		return offer.price.toLocaleString('en-US') + currencySymbol(offer.currency);
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
		if (bestOffer) {
			traders.forEach((trader) => {
				if (trader.name === bestOffer.vendor.name) bestSellTrader = trader;
			});
		}
	}
	setTraderToSell();
	setProfit();
</script>

<h1 class="py-2">{item.name}</h1>
<div class="flex flex-row gap-14 justify-center">
	<div class="card w-3/5 bg-base-100 shadow-xl">
		<div class="card-body">
			<div class="divider">
				<h2 class="card-title justify-center flex">Traders</h2>
			</div>
			<!-- Sell to trader -->
			{#if bestSellTrader}
				<span class="flex justify-center text-primary">Sell</span>
				<div class="flex flex-row gap-1">
					<div class="avatar flex">
						<div class="rounded w-6">
							<img
								src={bestSellTrader.image}
								alt={bestSellTrader.name}
								title={bestSellTrader.name}
							/>
						</div>
					</div>
					<span class="text-accent font-bold w-1/2">{bestSellTrader.name}</span>
					<span class="text-success flex justify-end w-full">{traderPriceString(bestOffer)}</span>
				</div>
			{/if}

			<!-- Buy from trader -->
			{#if canBeBoughtFromTrader()}
				<div class="divider p-0" />
				<span class="flex justify-center text-primary">Buy</span>
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
							<span class="text-error flex justify-end w-full">{traderPriceString(buyOffer)}</span>
						</div>
					{/if}
				{/each}
			{/if}

			<!-- Flea market -->
			<div class="divider">
				<h3 class="text-primary font-bold text-lg justify-center flex">Flea market</h3>
			</div>
			{#if canBeFlea()}
				<span class="flex justify-center text-primary">24 hour pricing</span>
				<div class="grid grid-cols-3">
					<!-- Low price -->
					<FleaPrice price={priceData.low24hPrice} header={'Low'} priceColor={'text-error'} />
					<!-- Average price -->
					<FleaPrice price={priceData.avg24hPrice} header={'Average'} priceColor={'text-success'} />
					<!-- Top price -->
					<FleaPrice price={priceData.high24hPrice} header={'High'} priceColor={'text-info'} />
				</div>
			{:else}
				<!-- If item banned from Flea market-->
				<span class="text-error justify-center flex">Banned from flea</span>
			{/if}
			<!-- Profit section-->
			<div class="divider">
				<h3 class="text-primary font-bold text-lg justify-center flex">Profit</h3>
			</div>
			<!-- Profit selling on flea market vs trader-->
			<div class="grid grid-cols-2">
				<FleaPrice
					price={profit}
					header={'Profit flea vs Trader'}
					priceColor={profit > 0 ? 'text-success' : 'text-error'}
				/>
				<!-- Value per inventory slot when selling on market-->
				<FleaPrice
					price={Math.round(priceData.avg24hPrice / (item.width * item.height))}
					header={'Price per slot'}
					priceColor={'text-success'}
				/>
			</div>
		</div>
	</div>

	<!-- Image card -->
	<div class="flex">
		<div class="card w-64 bg-base-100 shadow-xl">
			<!-- Image with icon on top -->
			<figure>
				<img src={item.image} alt="Image of {item.name}" title={item.name} />
			</figure>
			<img
				class="absolute top-0 right-0 mt-4 mr-4 hover:shadow-outline {item.height < item.width
					? 'w-32'
					: 'w-16'}"
				src={item.nameIcon}
				alt="{item.name} icon"
				title={item.name}
			/>
			<!-- Item image info -->
			<div class="card-body flex pt-4">
				<h2 class="flex justify-center text-primary font-bold text-lg">{item.name}</h2>
				<span class="flex justify-center text-accent">{item.shortName}</span>
				<span class="flex justify-center text-accent text-sm">{item.width + 'x' + item.height}</span
				>
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

<div class="card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side">
	<div class="flex w-full bg-primary justify-center">
		<h2 class="py-3 text-3xl text-secondary font-bold">Crafts</h2>
	</div>
	<div class="flex flex-col p-4 w-full">
		{#each item.CraftReqItem as craftReqItem, index}
			{#if index !== 0}
				<div class="divider" />
			{/if}
			<div class="flex flex-row">
				<!-- Hideout info -->
				<div class="flex flex-col items-center gap-1 w-1/6">
					<!-- Hideout name and level -->
					<span class="text-primary"
						>{`${craftReqItem.Craft.HideoutStation.Hideout.name} ${craftReqItem.Craft.HideoutStation.level}`}</span
					>
					<!-- Hideout image -->
					<div class="rounded w-14">
						<img
							src={hideoutImage(craftReqItem.Craft.HideoutStation.Hideout.name)}
							alt={craftReqItem.Craft.HideoutStation.Hideout.name}
							title={craftReqItem.Craft.HideoutStation.Hideout.name}
						/>
					</div>
				</div>
				<div class="divider divider-horizontal" />
				<div class="flex flex-row gap-6 items-center">
					<!-- All required items for craft -->
					<div class="flex flex-row gap-2 items-center">
						{#each craftReqItem.Craft.CraftReqItem as reqItem}
							<CraftBarterItem item={reqItem.item} count={reqItem.count} />
						{/each}
					</div>
					<!-- Duration to craft -->
					<div class="flex flex-col gap-2 items-center">
						<div class="w-12">
							<img src={`/static/svg/rightArrow.svg`} alt="{`Arrow that points to reward item`}}" />
						</div>
						<span class="text-accent">{timeString(craftReqItem.Craft.duration)}</span>
					</div>

					<div class="flex flex-row gap-2 items-center">
						{#each craftReqItem.Craft.CraftRewItem as rewItem}
							<CraftBarterItem item={rewItem.item} count={rewItem.count} />
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
