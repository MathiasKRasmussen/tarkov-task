import { prisma } from '$lib/db/prisma';
import type { Hideout, HideoutStation, Player, PlayerHasHideout } from '@prisma/client';

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

export async function getHideouts(): Promise<Hideout[]> {
    let hideouts: Hideout[] = []
    try {
        hideouts = await prisma.hideout.findMany({
            orderBy: {
                name: 'asc'
            }
        })
    } catch (error) {
        console.log('getHideouts', error)
    }
    return hideouts
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
                completed: true,
                hideoutStation: {
                    select: {
                        level: true,
                        HideoutReqItem: {
                            select: {
                                item: true,
                                count: true
                            }
                        },
                        HideoutReqSkill: {
                            select: {
                                level: true,
                                skill: true
                            }
                        },
                        HideoutReqTrader: {
                            select: {
                                level: true,
                                trader: true
                            }
                        },
                        RequiresStation: {
                            select: {
                                station: {
                                    include: {
                                        Hideout: true
                                    }
                                }
                            }
                        },
                        Hideout: true,
                    }
                }
            },
            orderBy: {
                hideoutStation: {
                    id: 'asc'
                }
            }
        })
    } catch (error) {
        console.log('getStationsByPlayer', error)
    }
    return stations
}