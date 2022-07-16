import { prisma } from '$lib/db/prisma';
import type { Player, Trader } from '@prisma/client';

export async function getTraders(): Promise<Trader[]> {
    const traders: Trader[] = await prisma.trader.findMany()
    return traders
}

export async function getPlayerTraders(player: Player): Promise<Trader[]> {
    const traders: Trader[] = await prisma.trader.findMany({
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
    return traders
}