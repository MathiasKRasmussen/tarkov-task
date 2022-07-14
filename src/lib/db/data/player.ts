import { prisma } from '$lib/db/prisma';
import type { HideoutStation, Player, Task } from '@prisma/client';
import { getHideoutStations } from '../models/hideouts';
import { getTasks } from '../models/tasks';
import { getStashIds } from './formatData';

export async function createPlayer(name: string, version: number): Promise<Player> {
    const tasks: Task[] = await getTasks()
    const stations: HideoutStation[] = await getHideoutStations()
    const stashIds: string[] = getStashIds(version)

    try {
        const player: Player = await prisma.player.create({ data: { name: name, version: version } })

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
        }
        return player

    } catch (error) {
        console.log('createPlayer', error)
    }
}

export async function getPlayer(name: string): Promise<Player> {
    try {
        const player: Player = await prisma.player.findUnique({
            where: {
                name: name
            }
        })
        console.log(player)
        return player
    } catch (error) {
        console.log('getPlayer', error)
    }
}