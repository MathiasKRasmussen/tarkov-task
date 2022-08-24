import { prisma } from '$lib/db/prisma';
import type { Hideout, HideoutStation, Player, PlayerHasHideout } from '@prisma/client';

// Gets all hideout stations 
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

// Get all hideouts
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

// Get all required items for hideout stations
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

// Get all hideout stations for a player
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
                id: true,
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

// Updates a player's hideout stations
export async function updatePlayerStations(playerHideouts: PlayerHasHideout[]): Promise<boolean> {
    let results: PlayerHasHideout[] = []
    try {
        for (const playerHideout of playerHideouts) {
            const result = await prisma.playerHasHideout.update({
                where: {
                    id: playerHideout.id,
                },
                data: {
                    completed: playerHideout.completed
                }
            })
            results.push(result)
        }
    } catch (error) {
        console.log('updatePlayerStations', error)
    }
    return playerHideouts.length === results.length
}


// Gets player's hideout stations
export async function getPlayerStations(player: Player): Promise<HideoutStation[]> {
    try {
        const stations: HideoutStation[] = await prisma.hideoutStation.findMany({
            include: {
                PlayerHasHideout: {
                    where: {
                        player: {
                            id: player.id
                        }
                    }
                },
                HideoutReqItem: {
                    include: {
                        item: true
                    }
                }
            }
        })
        return stations
    }
    catch (error) {
        console.log('getPlayerStations', error)
    }
}