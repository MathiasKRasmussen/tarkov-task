import type { Hideout, PlayerHasHideout } from "@prisma/client";



export function isHideoutStationComplete(hideout: Hideout, playerHasStations: PlayerHasHideout[]): boolean {
    let isComplete: boolean = true
    playerHasStations.forEach((playerStation) => {
        if (playerStation.hideoutStation.Hideout.id === hideout.id && !playerStation.completed) {
            isComplete = false
        }
    })
    return isComplete
}