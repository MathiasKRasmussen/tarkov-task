import { prisma } from '$lib/db/prisma';
import type { Hideout, HideoutStation, Item, ItemType, Map, Skill, Task } from '@prisma/client';
import { createHideouts, createItems, createMaps, createSkillList, createTraders, createTypeList, formatTaskData, getFaction } from "$lib/db/data/formatData"



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
                            let id: string = stationReq.station.id + '-' + stationReq.level
                            const resStationReq = await prisma.hideoutReqHideout.create({
                                data: {
                                    stationId: station.id,
                                    requiresId: id,
                                }
                            })
                            console.log(id)
                            console.log('------------------------------')
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

export async function connectTasks() {
    const tasks = formatTaskData()
    let count = 0

    let resultMaps = []
    let resultObj = []
    let resultKey = []
    let resultReward = []
    let resultRequest = []

    // tasks[42].finishRewards.items[0].item.id
    //console.log(tasks[65])
    for (const task of tasks) {
        console.log(task.name)
        console.log(task.items)
        for (const item of task.items) {
            count += 1
        }
        /*
        for (const req of task.taskRequirements) {
            const resReq = await prisma.taskReqTask.create({
                data: {
                    task: {
                        connect: {
                            id: task.id
                        }
                    },
                    requires: {
                        connect: {
                            id: req.task.id
                        }
                    }
                }
            })
            resultRequest.push(resReq)
        }
        */
        /*
        for (const reward of task.finishRewards.items) {
            const resReward = await prisma.taskRewardsItem.create({
                data: {
                    item: {
                        connect: {
                            id: reward.item.id
                        }
                    },
                    task: {
                        connect: {
                            id: task.id
                        }
                    },
                    count: reward.count
                }
            })
            resultReward.push(resReward)
        }
        */
        /*
        for (const nKey of task.neededKeys) {
            for (const key of nKey.keys) {
                const resKey = await prisma.taskReqKey.create({
                    data: {
                        key: {
                            connect: {
                                id: key.id
                            },
                        },
                        task: {
                            connect: {
                                id: task.id
                            }
                        }
                    }
                })
                resultKey.push(resKey)
            }
        }
        */
        /*
        for (const objective of task.objectives) {
            count += 1
            const resObj = await prisma.taskHasObjective.create({
                data: {
                    task: {
                        connect: {
                            id: task.id
                        }
                    },
                    description: objective.description,
                    optional: objective.optional,
                }
            })
            resultObj.push(resObj)
        }
        */
        /*
        if (task.maps && task.maps.length) {
            count += task.maps.length
            console.log(task.name)
            for (const map of task.maps) {
                const resMap = await prisma.taskOnMap.create({
                    data: {
                        map: {
                            connect: {
                                id: map
                            }
                        },
                        task: {
                            connect: {
                                id: task.id
                            }
                        }
                    }
                })
                resultMaps.push(resMap)
            }
        }
    */
    }
    console.log('count', count)
    console.log(resultRequest.length)
}

export async function addTasks() {
    let resultTasks = []
    const tasks = formatTaskData()
    for (const task of tasks) {
        let faction: string = task.factionName === undefined ? 'Any' : task.factionName
        let forKappa = task.kappa ? true : false

        try {

            const resTask: Task = await prisma.task.create({
                data: {
                    id: task.id,
                    name: task.name,
                    experience: task.experience,
                    wiki: task.wikiLink,
                    minPlayerLevel: task.minPlayerLevel ? task.minPlayerLevel : 0,
                    faction: getFaction(faction),
                    forKappa: forKappa,
                    //traderId: task.trader.id
                    trader: {
                        connect: {
                            id: task.trader.id
                        }
                    },
                }
            })
            resultTasks.push(resTask)
        }
        catch (error) {
            console.log(error)
        }

    }
    console.log(resultTasks.length)
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