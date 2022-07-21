import { getPlayer } from "$lib/db/data/player"
import type { Player } from "@prisma/client"

export async function get({ params }) {
    //let data = await request.json()
    console.log(params.playerName)
    let player: Player = await getPlayer(params.playerName)
    let success: boolean = true //await updatePlayerTasks(data.updatedPlayerTasks)
    return {
        body: {
            player,
            success: params.playerName ? true : false,
            // message: success ? 'Success' : 'Failed',
        },
    }
}