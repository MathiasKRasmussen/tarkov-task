import { prisma } from '$lib/db/prisma';
import type { Player, PlayerHasTasks, Task } from '@prisma/client';

export async function getTasks(): Promise<Task[]> {
    let tasks: Task[] = []
    try {
        tasks = await prisma.task.findMany()
    } catch (error) {
        console.log('getTasks', error)
    }
    return tasks
}

export async function getPlayerTasksItems(userId: string): Promise<PlayerHasTasks[]> {
    try {
        const playerTasks: PlayerHasTasks[] = await prisma.playerHasTasks.findMany({
            where: {
                player: {
                    id: userId
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

export async function getPlayerTasks(userId: string): Promise<PlayerHasTasks[]> {
    try {
        const playerTasks: PlayerHasTasks[] = await prisma.playerHasTasks.findMany({
            where: {
                player: {
                    id: userId
                }
            },
            include: {
                task: {
                    include: {
                        trader: true,
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