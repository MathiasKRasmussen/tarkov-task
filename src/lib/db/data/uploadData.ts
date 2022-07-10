import { prisma } from '$lib/db/prisma';
import type { Hideout, HideoutStation, Item, ItemType, Map, Skill } from '@prisma/client';
import { createHideouts, createItems, createMaps, createSkillList, createTraders, createTypeList } from "$lib/db/data/formatData"



export async function connectHideouts() {
    const hideouts = createHideouts()
    let resultTraders = []
    let resultSkills = []
    let resultItems = []

    for (const hideout of hideouts) {
        for (const station of hideout.levels) {
            /*
            for (const trader of station.traderRequirements) {
                const resTraders = await prisma.hideoutReqTrader.create({
                    data: {
                        hideoutStation: {
                            connect: {
                                id: station.id
                            },
                        },
                        trader: {
                            connect: {
                                id: trader.trader.id
                            }
                        },
                        level: trader.level
                    }
                })
                resultTraders.push(resTraders)
            }
            console.log(resultTraders)
            */
            /*
             for (const skill of station.skillRequirements) {
                 const resSkills = await prisma.hideoutReqSkill.create({
                     data: {
                         hideoutStation: {
                             connect: {
                                 id: station.id
                             },
                         },
                         skill: {
                             connect: {
                                 name: skill.name
                             }
                         },
                         level: skill.level
                     }
                 })
                 resultSkills.push(resSkills)
             } */
            // TODO: Need table for hideout relations
            /*
           for (const stationReq of station.stationLevelRequirements) {
               const resStationReq = await prisma.hi
               console.log(stationReq)
           } */
            /*
             for (const item of station.itemRequirements) {
                 const resItem = await prisma.hideoutReqItem.create({
                     data: {
                         hideoutStation: {
                             connect: {
                                 id: station.id
                             },
                         },
                         item: {
                             connect: {
                                 id: item.item.id
                             }
                         },
                         count: item.count
                     }
                 })
                 resultItems.push(resItem)
             } */
        }
    }

}



export async function addHideout(): Promise<any> {
    const hideouts = createHideouts()
    let resultHideouts: Hideout[] = []
    let resultStations: HideoutStation[] = []
    for (const hideout of hideouts) {
        const resHideout: Hideout = await prisma.hideout.create({
            data: {
                id: hideout.id,
                name: hideout.name,
            }
        })
        resultHideouts.push(resHideout)

        for (const station of hideout.levels) {
            const resStation: HideoutStation = await prisma.hideoutStation.create({
                data: {
                    id: station.id,
                    level: station.level,
                    constructionTime: station.constructionTime,
                    hideoutId: hideout.id
                }
            })
            resultStations.push(resStation)
        }
    }
}

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
    for (const item of items) {
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
    console.log(result)
}

export async function addTypesToItems(): Promise<any> {
    let result = []
    const items: Item[] = createItems()
    for (const item of items) {
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