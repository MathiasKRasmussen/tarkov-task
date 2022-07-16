import { getPlayer } from "$lib/db/data/player"
import { getPlayerTasks } from "$lib/db/models/tasks"
import type { Player, PlayerHasTasks } from "@prisma/client"

export async function get({ params }) {
    const player: Player = await getPlayer('Radelly')
    const playerTasks: PlayerHasTasks[] = await getPlayerTasks(player)
    return {
        body: {
            playerTasks,
        },
    }
}