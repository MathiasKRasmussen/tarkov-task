import { prisma } from '$lib/db/prisma';
import type { HideoutStation, Player, PlayerHasHideout } from '@prisma/client';

export async function getHideoutStations(): Promise<HideoutStation[]> {
    let stations: HideoutStation[] = []
    try {
        stations = await prisma.hideoutStation.findMany({
            include: {
                Hideout: true
            }
        })
    } catch (error) {
        console.log('getHideoutStations', error)
    }
    return stations
}

export async function getStationItemsByPlayer(player: Player) {
    let stations: PlayerHasHideout[] = []
    try {
        stations = await prisma.playerHasHideout.findMany({
            where: {
                player: {
                    id: player.id
                },
                completed: false
            },
            select: {
                hideoutStation: {
                    select: {
                        HideoutReqItem: {
                            select: {
                                item: true,
                                count: true
                            }
                        }
                    }
                }
            }
        })
    } catch (error) {
        console.log('getStationItemsByPlayer')
    }
    return stations
}