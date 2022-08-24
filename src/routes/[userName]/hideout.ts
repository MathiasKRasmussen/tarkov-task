import { getPlayer } from "$lib/db/models/player"
import { getHideouts, getStationsByPlayer } from "$lib/db/models/hideouts"
import type { Hideout, Player, PlayerHasHideout } from "@prisma/client"

// Gets endpoint all hideouts station and how upgraded they are 
export async function get({ params }: { params: any }) {
    const { userName } = params
    const player: Player = await getPlayer(userName)
    const playerHasStations: PlayerHasHideout[] = await getStationsByPlayer(player)
    const hideouts: Hideout[] = await getHideouts()
    const urlName: string = userName
    return {
        body: {
            hideouts,
            playerHasStations,
            urlName
        },
    }
}