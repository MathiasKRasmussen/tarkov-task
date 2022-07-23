import { getPlayer } from "$lib/db/data/player"
import { updateTasks } from "$lib/db/data/uploadData"
import { getKeys } from "$lib/db/models/items"
import type { Player } from "@prisma/client"

export async function get({ params }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    await getKeys()
    return {
        body: {
        },
    }
}