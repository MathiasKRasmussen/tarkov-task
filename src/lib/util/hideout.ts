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

export function hideoutImage(name: string): string {
    let urlName: string = name.split(' ').join('_')
    return `https://cdn.tarkov-market.app/images/hideout/${urlName}.png`
}