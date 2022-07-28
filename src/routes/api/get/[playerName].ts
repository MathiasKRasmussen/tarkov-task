import { getPlayer } from "$lib/db/data/player"
import { getPlayerTradersWithTasks } from "$lib/db/models/traders"
import type { Player, Trader } from "@prisma/client"

export async function get({ params }) {
    //let data = await request.json()
    console.log(params.playerName)
    let player: Player = await getPlayer(params.playerName)
    let traders: Trader[] = await getPlayerTradersWithTasks(player)
    return {
        body: {
            player,
            traders,
            success: params.playerName ? true : false,
            // message: success ? 'Success' : 'Failed',
        },
    }
}