import { updatePlayer } from "$lib/db/data/player"
import type { Player } from "@prisma/client"

export async function post({ request }) {
    let data = await request.json()
    const player: Player = await updatePlayer(data.player, data.newVersion, data.newLevel, data.newTraderLevels)
    return {
        body: {
            success: player ? true : false,
        },
    }
}