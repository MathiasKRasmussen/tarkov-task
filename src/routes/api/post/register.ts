import { getFaction } from "$lib/db/data/formatData"
import { createPlayer, getPlayer } from "$lib/db/data/player"
import type { faction, Player } from "@prisma/client"

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
        let fac: faction = getFaction(data.playerFaction)
        const player: Player = await createPlayer(data.registerInput, data.newVersion, 1, fac)
        return {
            body: {
                player,
                success: true,
            },
        }
    }
}