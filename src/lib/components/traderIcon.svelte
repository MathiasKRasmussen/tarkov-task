<script lang="ts">
import { getTraderLevel, getTraderRomanLevel } from "$lib/util/trader";

    import type { Trader } from "@prisma/client";


    export let trader: Trader
</script>

<div class="bg-primary flex flex-row items-center pt-3 p-4">
    <!-- Avatar of trader with level indicator-->
    <div class="avatar indicator">
        <!-- Level indicator-->
        <span
            class="indicator-item indicator-bottom badge badge-neutral"
            title={trader.name + ' level ' + getTraderLevel(trader)}
            >{getTraderRomanLevel(trader)}</span
        >
        <!-- Trader avatar-->
        <div class="avatar flex">
            <div class="rounded w-14">
                <a href={trader.wiki} target="_blank">
                    <img src={trader.image} alt={trader.name} title={trader.name} />
                </a>
            </div>
        </div>
    </div>
    <!-- Trader name-->
    <h2 class="pl-6 card-title text-secondary font-bold text-3xl">{trader.name}</h2>
</div>