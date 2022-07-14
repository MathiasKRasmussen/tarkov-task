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
        console.log(playerTasks)
        return playerTasks
    } catch (error) {
        console.log('getPlayerTasks', error)
    }
}