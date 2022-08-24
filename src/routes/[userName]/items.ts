import { getPlayer } from "$lib/db/models/player"
import { getStationItemsByPlayer } from "$lib/db/models/hideouts"
import { getPlayerTasksItems } from "$lib/db/models/tasks"
import { addHideoutItems, getRequiredTaskItems } from "$lib/util/formatItems"
import type { Player } from "@prisma/client"

// Gets all items for tasks/hideout
export async function get({ params }: { params: any }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
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