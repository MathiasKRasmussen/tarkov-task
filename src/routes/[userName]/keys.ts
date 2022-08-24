import { getPlayer } from "$lib/db/models/player"
import { getKeys } from "$lib/db/models/items"
import type { ItemHasType, Player } from "@prisma/client"

// Get endpoint for all keys
export async function get({ params }: { params: any }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const keys: ItemHasType[] = await getKeys(player)
    const urlName: string = userName
    return {
        body: {
            keys,
            urlName
        },
    }
}