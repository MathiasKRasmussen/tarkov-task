import { getPlayer } from "$lib/db/data/player"
import { getPlayerTasks } from "$lib/db/models/tasks"
import { getPlayerTraders, getTraders } from "$lib/db/models/traders"
import type { Player, Trader } from "@prisma/client"

export async function get({ params }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const playerHasTasks = await getPlayerTasks(player)
    const traders: Trader[] = await getPlayerTraders(player)
    console.log(traders)
    return {
        body: {
            traders,
            playerHasTasks,
        },
    }
}