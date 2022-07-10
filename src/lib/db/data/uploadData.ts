import { prisma } from '$lib/db/prisma';
import type { Item, ItemType, Map, Skill } from '@prisma/client';
import { createItems, createMaps, createSkillList, createTraders, createTypeList } from "$lib/db/data/formatData"


/*
export async function addHideoutStations(): Promise<any> {
    const result = await prisma.hideoutStation.create({
        data: {
            
        }
    })
    return result
}*/

export async function findItems(): Promise<any> {
    const items: Item[] = createItems()
    console.log(items.length)
    for (const item of items) {
        const res = await prisma.item.findUnique({
            where: {
                id: item.id
            }
        })
    }
}

export async function addItems(): Promise<any> {
    const result: Item[] = []
    const items: Item[] = createItems()
    let bool: boolean = false
    for (const item of items) {
        if (item.name === 'Olight Baldr Pro tactical flashlight with laser (Tan)') {
            bool = true
        }
        if (bool) {
            console.log(item)
            try {

                const res: Item = await prisma.item.create({
                    data: {
                        id: item.id,
                        name: item.name,
                        shortName: item.shortName,
                        width: item.width,
                        height: item.height,
                        wiki: item.wiki,
                        image: item.image,
                    }
                })
                result.push(res)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
    console.log(result)
}

export async function addTypesToItems(): Promise<any> {
    let result = []
    let bool = false
    const items: Item[] = createItems()
    for (const item of items) {
        if (item.id === '6259bdcabd28e4721447a2aa') {
            bool = true
        }
        if (bool) {
            for (const type of item.types) {
                try {

                    const res = await prisma.itemHasType.create({
                        data: {
                            item: {
                                connect: {
                                    id: item.id
                                },
                            },
                            type: { connect: { name: type } }
                        }
                    })
                    result.push(res)
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
    }
    console.log(result)
    return result
}

export async function addTraders(): Promise<any> {
    const result = await prisma.trader.createMany({
        data: createTraders(),
        skipDuplicates: true,
    })
    console.log('traders', result)
    return result
}

export async function addMaps(): Promise<any> {
    const result = await prisma.map.createMany({
        data: createMaps(),
        skipDuplicates: true,
    })
    console.log('maps', result)
    return result
}

export async function addSkills(): Promise<Skill[]> {
    const skills: string[] = createSkillList()
    let result: Skill[] = []
    for (const skill of skills) {
        const res: Skill = await prisma.skill.create({
            data: {
                name: skill
            },
        })
        result.push(res)
    }
    console.log(result)
    return result
}

export async function addItemTypes(): Promise<ItemType[]> {
    const types: string[] = createTypeList()
    let result: ItemType[] = []
    for (const type of types) {
        const res: ItemType = await prisma.itemType.create({
            data: {
                name: type
            }
        })
        result.push(res)
    }
    console.log(result)
    return result
}