<script lang="ts">
import { getTraderLevel, getTraderRomanLevel } from "$lib/util/trader";

    import type { Trader } from "@prisma/client";


    export let trader: Trader
</script>

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