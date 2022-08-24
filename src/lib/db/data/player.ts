import { prisma } from '$lib/db/prisma';
import type { HideoutStation, Player, Task, Trader } from '@prisma/client';
import { getHideoutStations } from '../models/hideouts';
import { getTasksByFaction } from '../models/tasks';
import { createTraders, getStashIds } from './formatData';

export async function createPlayer(name: string, version: number, level: number, faction: string): Promise<Player> {
    const tasks: Task[] = await getTasksByFaction(faction)
    const stations: HideoutStation[] = await getHideoutStations()
    const stashIds: string[] = getStashIds(version)
    const traders: Trader[] = createTraders()

    try {
        const player: Player = await prisma.player.create({ data: { name: name, version: version, level: level, faction: faction } })

        if (player) {
            // Set all tasks to not completed
            for (const task of tasks) {
                await prisma.playerHasTasks.create({
                    data: {
                        completed: false,
                        task: {
                            connect: {
                                id: task.id
                            }
                        },
                        player: {
                            connect: {
                                id: player.id
                            }
                        }
                    }
                })
            }
            // Set hideoutstation completions
            for (const station of stations) {
                const isStashLevel: boolean = stashIds.includes(station.id)
                await prisma.playerHasHideout.create({
                    data: {
                        completed: isStashLevel,
                        hideoutStation: {
                            connect: {
                                id: station.id
                            }
                        },
                        player: {
                            connect: {
                                id: player.id
                            }
                        }
                    }
                })
            }
            // Add traders to player
            for (const trader of traders) {
                const result = await prisma.playerHasTrader.create({
                    data: {
                        trader: {
                            connect: {
                                id: trader.id
                            }
                        },
                        player: {
                            connect: {
                                id: player.id
                            }
                        }
                    }
                })
            }
        }
        return player

    } catch (error) {
        console.log('createPlayer', error)
    }
}

export async function updatePlayer(player: Player, newVersion: number, newLevel: number, newTraderLevels: { trader: Trader; level: number }[]): Promise<Player> {
    try {
        // Update player level and version
        const resPlayer: Player = await prisma.player.update({
            where: {
                id: player.id
            },
            data: {
                level: newLevel,
                version: newVersion,
            }
        })

        if (resPlayer) {

            // update players trader levels
            for (const traderLevel of newTraderLevels) {
                await prisma.playerHasTrader.update({
                    where:
                    {
                        playerId_traderId: {
                            playerId: player.id,
                            traderId: traderLevel.trader.id
                        }
                    },
                    data: {
                        level: traderLevel.level
                    }
                })
            }
        }
        return resPlayer

    } catch (error) {
        console.log('updatePlayer', error)
    }
}

export async function getPlayer(name: string): Promise<Player> {
    try {
        const player: Player = await prisma.player.findUnique({
            where: {
                name: name
            }
        })

        return player
    } catch (error) {
        console.log('getPlayer', error)
    }
}