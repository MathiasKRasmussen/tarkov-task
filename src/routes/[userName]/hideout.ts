import { getPlayer } from "$lib/db/data/player"
import { getHideouts, getStationsByPlayer } from "$lib/db/models/hideouts"
import type { Hideout, Player, PlayerHasHideout } from "@prisma/client"

export async function get({ params }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const playerHasStations: PlayerHasHideout[] = await getStationsByPlayer(player)
    const hideouts: Hideout[] = await getHideouts()
    console.group(playerHasStations[0].hideoutStation.RequiresStation)
    return {
        body: {
            hideouts,
            playerHasStations,
            player,
        },
    }
}