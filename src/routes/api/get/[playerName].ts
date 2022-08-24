import { getPlayer } from "$lib/db/models/player"
import { getPlayerStations } from "$lib/db/models/hideouts"
import { getPlayerTradersWithTasks } from "$lib/db/models/traders"
import type { HideoutStation, Player, Trader } from "@prisma/client"

// Get endpoint for player info
export async function get({ params }: { params: any }) {
    let player: Player = await getPlayer(params.playerName)
    let traders: Trader[] = await getPlayerTradersWithTasks(player)
    let stations: HideoutStation[] = await getPlayerStations(player)
    return {
        body: {
            player,
            traders,
            stations,
            success: params.playerName ? true : false,
        },
    }
}