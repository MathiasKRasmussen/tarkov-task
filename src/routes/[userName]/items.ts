import { getPlayer } from "$lib/db/data/player"
import { getStationItemsByPlayer } from "$lib/db/models/hideouts"
import { getPlayerTasksItems } from "$lib/db/models/tasks"
import { addHideoutItems, addRemainingItems, getRequiredTaskItems } from "$lib/util/formatItems"
import type { Player } from "@prisma/client"

export async function get({ params }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const playerTasks = await getPlayerTasksItems(player)
    const items = getRequiredTaskItems(playerTasks)
    const playerHasStations = await getStationItemsByPlayer(player)
    addHideoutItems(items, playerHasStations)
    //const allItems: Item[] = await getAllItems()
    //addRemainingItems(allItems, items)
    return {
        body: {
            items,
        },
    }
}