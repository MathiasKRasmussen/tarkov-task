import { prisma } from '$lib/db/prisma';
import { eftSort } from '$lib/util/trader';
import type { Player, Trader } from '@prisma/client';

export async function getTraders(): Promise<Trader[]> {
    const traders: Trader[] = await prisma.trader.findMany()
    return traders
}

// Get a single trader by name
export async function getTrader(name: string): Promise<Trader> {
    const trader: Trader = await prisma.trader.findFirst({
        where: {
            name: name
        }
    })
    return trader
}

// Get all traders for a player
export async function getPlayerTraders(player: Player): Promise<Trader[]> {
    let traders: Trader[] = await prisma.trader.findMany({
        include: {
            PlayerHasTrader: {
                where: {
                    player: {
                        id: player.id
                    }
                }
            }
        }
    })
    traders = eftSort(traders)
    return traders
}

// Get all traders for a player with their tasks
export async function getPlayerTradersWithTasks(player: Player): Promise<Trader[]> {
    let traders: Trader[] = await prisma.trader.findMany({
        include: {
            PlayerHasTrader: {
                where: {
                    player: {
                        id: player.id
                    }
                }
            },
            Task: {
                include: {
                    PlayerHasTasks: {
                        where: {
                            player: {
                                id: player.id
                            }
                        }
                    },
                    TaskReqItem: {
                        include: {
                            item: true,
                        }
                    }
                }
            }
        }
    })
    traders = eftSort(traders)
    return traders
}