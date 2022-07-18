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

export async function getStationItemsByPlayer(player: Player): Promise<PlayerHasHideout[]> {
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
                        },
                    }
                }
            }
        })
    } catch (error) {
        console.log('getStationItemsByPlayer', error)
    }
    return stations
}

export async function getStationsByPlayer(player: Player): Promise<PlayerHasHideout[]> {
    let stations: PlayerHasHideout[] = []
    try {
        stations = await prisma.playerHasHideout.findMany({
            where: {
                player: {
                    id: player.id
                },
            },
            select: {
                hideoutStation: {
                    select: {
                        HideoutReqItem: {
                            select: {
                                item: true,
                                count: true
                            }
                        },
                        HideoutReqSkill: {
                            select: {
                                skill: true
                            }
                        },
                        HideoutReqTrader: {
                            select: {
                                trader: true
                            }
                        },
                        RequiresStation: {
                            select: {
                                station: {
                                    select: {
                                        Hideout: true
                                    }
                                }
                            }
                        },
                        Hideout: true,
                    }
                }
            }
        })
    } catch (error) {
        console.log('getStationsByPlayer', error)
    }
    return stations
}