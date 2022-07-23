import { prisma } from '$lib/db/prisma';
import type { faction, Player, PlayerHasTasks, Task } from '@prisma/client';
import { getFaction } from '../data/formatData';

export async function getTasks(): Promise<Task[]> {
    let tasks: Task[] = []
    try {
        tasks = await prisma.task.findMany()
    } catch (error) {
        console.log('getTasks', error)
    }
    return tasks
}

export async function getTasksByFaction(faction: faction): Promise<Task[]> {
    let tasks: Task[] = []
    const factions: faction[] = [getFaction('Any'), faction]
    try {
        tasks = await prisma.task.findMany({
            where: {
                faction: {
                    in: factions
                }
            }
        })
    } catch (error) {
        console.log('getTasksByFaction', error)
    }
    return tasks
}

export async function getPlayerTasksItems(player: Player): Promise<PlayerHasTasks[]> {
    try {
        const playerTasks: PlayerHasTasks[] = await prisma.playerHasTasks.findMany({
            where: {
                player: {
                    id: player.id
                },
                completed: false,
            },
            select: {
                task: {
                    select: {
                        TaskReqItem: {
                            select: {
                                foundInRaid: true,
                                count: true,
                                item: true,
                            },
                        },
                    },
                },
            },
        })
        return playerTasks
    } catch (error) {
        console.log('getPlayerTasksItems', error)
    }
}

export async function getPlayerTasks(player: Player): Promise<PlayerHasTasks[]> {
    try {
        const playerTasks: PlayerHasTasks[] = await prisma.playerHasTasks.findMany({
            where: {
                player: {
                    id: player.id
                }
            },
            include: {
                task: {
                    include: {
                        trader: {
                            include: {
                                PlayerHasTrader: true
                            }
                        },
                        TaskOnMap: {
                            include: {
                                map: true
                            }
                        },
                        TaskHasObjective: true,
                        TaskReqKey: {
                            include: {
                                key: true
                            }
                        },
                        TaskReqItem: {
                            include: {
                                item: true
                            }
                        },
                        TaskRewardsItem: {
                            include: {
                                item: true
                            }
                        }
                    }
                },
            }
        })
        return playerTasks
    } catch (error) {
        console.log('getPlayerTasks', error)
    }
}

export async function updatePlayerTasks(playerTasks: PlayerHasTasks[]): Promise<boolean> {
    let results: PlayerHasTasks[] = []
    try {
        for (const playerTask of playerTasks) {
            const result = await prisma.playerHasTasks.update({
                where: {
                    id: playerTask.id,
                },
                data: {
                    completed: playerTask.completed
                }
            })
            results.push(result)
        }
    } catch (error) {
        console.log('updatePlayerTasks', error)
    }
    return playerTasks.length === results.length
}