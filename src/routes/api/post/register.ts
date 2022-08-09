import { createPlayer, getPlayer, playerExists } from "$lib/db/data/player"
import type { Player } from "@prisma/client"

export async function post({ request }) {
    let data = await request.json()
    const exists = await getPlayer(data.registerInput)
    if (exists) {
        return {
            body: {
                success: false,
            },
        }
    } else {
        const player: Player = await createPlayer(data.registerInput, data.newVersion, 1, data.playerFaction)
        return {
            body: {
                player,
                success: true,
            },
        }
    }
}