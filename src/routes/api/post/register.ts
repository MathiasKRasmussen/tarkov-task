import { createPlayer, getPlayer } from "$lib/db/models/player"
import type { Player } from "@prisma/client"

// Post endpoint for registering a new user
export async function post({ request }: { request: any }) {
    let data = await request.json()
    const exists = await getPlayer(data.registerInput)
    // Returns false if a player with that name exists 
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