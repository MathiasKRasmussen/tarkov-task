<script lang="ts">
	import Barter from '$lib/components/item/barter.svelte';

	import Crafting from '$lib/components/item/crafting.svelte';
	import FleaPrice from '$lib/components/item/fleaPrice.svelte';
	import {
		bestTraderToSell,
		convertCurrency,
		currencySymbol,
		fleaProfit
	} from '$lib/util/itemPrice';

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

	let bestOffer: { price: number; currency: string; vendor: { name: string } };
	let bestSellTrader: Trader;
	let profit: number = 0;

	// Profit is flea market price - trader price
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

	// Creates the string displaying the price in the different currencies
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

	// Get the trader from the graphQL data
	function getTrader(name: string): Trader {
		let trader: Trader;
		traders.forEach((t) => {
			if (t.name === name) trader = t;
		});
		return trader;
	}

	// Returns true if item can be sold/bought on flea market
	function canBeFlea(): boolean {
		let canBeFlea: boolean = true;
		item.ItemHasType.forEach((itemHasType) => {
			if (itemHasType.type.name === 'noFlea') canBeFlea = false;
		});
		return canBeFlea;
	}

	// Finds the best trader to sell to
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

<svelte:head>
	<title>{item.name} - Tarkov Tasker</title>
	<meta name="description" content="Item page" />
</svelte:head>

<h1 class="py-2">{item.name}</h1>
<div class="flex flex-row gap-14 justify-center pb-8">
	<div class="card w-2/3 bg-base-100 shadow-xl">
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
	<div class="flex w-1/3">
		<div class="card bg-base-100 shadow-xl">
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
				<ul class="list-disc list-inside py-2">
					{#each item.TaskRewardsItem as taskRewards}
						<li class="text-accent text-xs">
							<span class="text-success">{taskRewards.count}</span>
							<span>from</span>
							<a href={taskRewards.task.wiki} target="_blank">{taskRewards.task.name}</a>
						</li>
					{/each}
				</ul>
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

<!-- Show what tasks and hideout stations the item is needed for -->
{#if item.TaskReqItem.length || item.HideoutReqItem.length}
	<div class="pb-8">
		<div class="card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side">
			<div class="flex w-full bg-primary justify-center">
				<h2 class="py-3 text-3xl text-secondary font-bold">Required for Tasks / Hideout</h2>
			</div>
			<div class="flex flex-col p-0 w-full">
				<div class="overflow-x-auto">
					<table class="table table-auto table-zebra w-full">
						<!-- head -->
						<thead>
							<tr class="border border-b-[1px] border-primary border-x-0 border-y-0">
								<th class="text-primary w-1/12  ">
									<div class="flex justify-center text-primary">Amount</div>
								</th>
								<th class="text-primary flex justify-center">Task / Hideout</th>
							</tr>
						</thead>
						<tbody>
							<!-- Tasks-->
							{#each item.TaskReqItem as reqItem}
								<tr>
									<td
										class="font-bold flex justify-center {reqItem.foundInRaid
											? 'text-error'
											: 'text-success'}"
										title={reqItem.foundInRaid ? 'Find in raid' : 'Item can be bought'}
										>{reqItem.count}</td
									>
									<td>
										<div class="text-accent flex justify-center">
											<a href={reqItem.task.wiki} target="_blank">{reqItem.task.name}</a>
										</div>
									</td>
								</tr>
							{/each}
							<!-- Hideout stations-->
							{#each item.HideoutReqItem as reqItem}
								<tr>
									<td class="text-success font-bold flex justify-center" title="Item can be bought"
										>{reqItem.count}</td
									>
									<td>
										<div class="text-accent flex justify-center">
											{reqItem.hideoutStation.Hideout.name + ' ' + reqItem.hideoutStation.level}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Crafting card showing all crafts-->
{#if item.CraftReqItem.length || item.CraftRewItem.length}
	<div class="pb-8">
		<div class="card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side">
			<div class="flex w-full bg-primary justify-center">
				<h2 class="py-3 text-3xl text-secondary font-bold">Crafts</h2>
			</div>
			<div class="flex flex-col p-4 w-full">
				<!-- All crafting that rewards item -->
				{#each item.CraftRewItem as craftRewItem, index}
					{#if index !== 0}
						<div class="divider" />
					{/if}
					<Crafting craft={craftRewItem.Craft} />
				{/each}
				<!-- All crafting that requires the item-->
				{#each item.CraftReqItem as craftReqItem, index}
					{#if item.CraftRewItem.length || index !== 0}
						<div class="divider" />
					{/if}
					<Crafting craft={craftReqItem.Craft} />
				{/each}
			</div>
		</div>
	</div>
{/if}

<!-- Barter card showing all barters-->
{#if item.BarterReqItem.length || item.BarterRewItem.length}
	<div class="pb-8">
		<div class="card w-full flex-wrap justify-center bg-base-100 shadow-xl lg:card-side">
			<div class="flex w-full bg-primary justify-center">
				<h2 class="py-3 text-3xl text-secondary font-bold">Barter trades</h2>
			</div>
			<div class="flex flex-col p-4 w-full">
				<!-- All barters that rewards item -->
				{#each item.BarterRewItem as barterRewItem, index}
					{#if index !== 0}
						<div class="divider" />
					{/if}
					<Barter barter={barterRewItem.Barter} />
				{/each}
				<!-- All barters that requires the item-->
				{#each item.BarterReqItem as barterReqItem, index}
					{#if item.BarterRewItem.length || index !== 0}
						<div class="divider" />
					{/if}
					<Barter barter={barterReqItem.Barter} />
				{/each}
			</div>
		</div>
	</div>
{/if}
