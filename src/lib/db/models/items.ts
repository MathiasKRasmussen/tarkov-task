import { prisma } from '$lib/db/prisma';
import type { Item, ItemHasType } from '@prisma/client';

export async function getAllItems(): Promise<Item[]> {
    let result: Item[]
    try {
        result = await prisma.item.findMany()
    } catch (error) {
        console.log('getAllItems', error)
    }
    return result
}

export async function getKeys(): Promise<ItemHasType[]> {
    try {
        const result: ItemHasType[] = await prisma.itemHasType.findMany({
            where: {
                type: {
                    name: 'keys'
                },
            },
            include: {
                item: {
                    include: {
                        TaskReqItem: {
                            include: {
                                task: true
                            }
                        },
                        TaskReqKey: {
                            include: {
                                task: true
                            }
                        }
                    },
                }
            },
        })
        return result
    } catch (error) {
        console.log('getKeys', error)
    }
}