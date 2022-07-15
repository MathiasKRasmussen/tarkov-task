import { userId } from "$lib/db/data/formatData"
import { getPlayer } from "$lib/db/data/player"
import { getStationItemsByPlayer } from "$lib/db/models/hideouts"
import { getPlayerTasks, getPlayerTasksItems } from "$lib/db/models/tasks"
import { addHideoutItems, getRequiredTaskItems } from "$lib/util/formatItems"
import type { Player } from "@prisma/client"

export async function get() {
    const player: Player = await getPlayer('Radelly')
    const playerTasks = await getPlayerTasksItems(player)
    const items = getRequiredTaskItems(playerTasks)
    const playerHasStations = await getStationItemsByPlayer(player)
    addHideoutItems(items, playerHasStations)
    return {
        body: {
            items,
        },
    }
}