import { getPlayer } from "$lib/db/data/player"
import { getPlayerTasks, getTasks } from "$lib/db/models/tasks"
import { getPlayerTraders, getTraders } from "$lib/db/models/traders"
import { compareTaskNames } from "$lib/util/formatTasks"
import type { Player, Trader } from "@prisma/client"

export async function get({ params }) {
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