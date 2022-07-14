import { userId } from "$lib/db/data/formatData"
import { getPlayer } from "$lib/db/data/player"
import { getPlayerTasks } from "$lib/db/models/tasks"
import type { Player, PlayerHasTasks } from "@prisma/client"

export async function get({ params }) {
    const playerTasks: PlayerHasTasks[] = await getPlayerTasks(userId)
    return {
        body: {
            playerTasks,
        },
    }
}