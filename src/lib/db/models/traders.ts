import { prisma } from '$lib/db/prisma';
import { eftSort } from '$lib/util/trader';
import type { Player, Trader } from '@prisma/client';

export async function getTraders(): Promise<Trader[]> {
    const traders: Trader[] = await prisma.trader.findMany()
    return traders
}

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