import { getPlayer } from "$lib/db/data/player"
import { getPlayerStations } from "$lib/db/models/hideouts"
import { getPlayerTradersWithTasks } from "$lib/db/models/traders"
import type { HideoutStation, Player, Trader } from "@prisma/client"

export async function get({ params }) {
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