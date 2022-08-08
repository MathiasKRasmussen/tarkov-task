import { getPlayer } from "$lib/db/data/player"
import type { Player } from "@prisma/client"

export async function post({ request }) {
    let data = await request.json()
    const player: Player = await getPlayer(data.loginInput)
    return {
        body: {
            player,
            success: player ? true : false,
        },
    }
}