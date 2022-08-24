import { getPlayer } from "$lib/db/models/player"
import { getPlayerTasks } from "$lib/db/models/tasks"
import { getPlayerTraders } from "$lib/db/models/traders"
import { compareTaskNames } from "$lib/util/formatTasks"
import type { Player, Trader } from "@prisma/client"

// Gets all player tasks
export async function get({ params }: { params: any }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const playerHasTasks = await getPlayerTasks(player)
    playerHasTasks.sort(compareTaskNames)
    const traders: Trader[] = await getPlayerTraders(player)
    return {
        body: {
            traders,
            playerHasTasks,
            player,
        },
    }
}