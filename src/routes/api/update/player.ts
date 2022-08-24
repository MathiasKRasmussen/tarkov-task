import { updatePlayer } from "$lib/db/models/player"
import type { Player } from "@prisma/client"

// Post endpoint for updating a player info
export async function post({ request }: { request: any }) {
    let data = await request.json()
    const player: Player = await updatePlayer(data.player, data.newVersion, data.newLevel, data.newTraderLevels)
    return {
        body: {
            success: player ? true : false,
        },
    }
}