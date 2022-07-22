import { prisma } from '$lib/db/prisma';
import type { Item } from '@prisma/client';

export async function getAllItems(): Promise<Item[]> {
    let result: Item[]
    try {
        result = await prisma.item.findMany()
    } catch (error) {
        console.log('getAllItems', error)
    }
    return result
}