import { getPlayer } from "$lib/db/models/player"
import type { Player } from "@prisma/client"

// Post endpoint for loging in
export async function post({ request }: { request: any }) {
    let data = await request.json()
    const player: Player = await getPlayer(data.loginInput)
    return {
        body: {
            player,
            success: player ? true : false,
        },
    }
}