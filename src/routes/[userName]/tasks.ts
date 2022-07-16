import { getPlayer } from "$lib/db/data/player"
import type { Player } from "@prisma/client"

export async function get({ params }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    console.log(player)
    return {
        body: {
            player,
        },
    }
}