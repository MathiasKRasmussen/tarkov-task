//////////////////////////////////////////////////////////////
//////////////////////// FOR DEV ONLY ////////////////////////
//////////////////////////////////////////////////////////////

import { prisma } from '$lib/db/prisma';
import type { Barter, Craft, Hideout, HideoutStation, Item, ItemType, Player, Skill, Task } from '@prisma/client';
import { createBarters, createCraftItemsList, createCrafts, createHideouts, createItemIcons, createItems, createMaps, createSkillList, createTraders, createTypeList, formatTaskData, getFaction } from "$lib/db/data/formatData"
import { getTasks } from '../models/tasks';

export async function updateTasks() {
    let resultTasks = []
    const tasks = formatTaskData()

    for (const task of tasks) {
        let faction: string = task.factionName === undefined ? 'Any' : task.factionName
        let forKappa = task.kappa ? true : false

        try {

            const resTask: Task = await prisma.task.upsert({
                where: {
                    id: task.id
                },
                update: {
                    id: task.id,
                    name: task.name,
                    experience: task.experience,
                    wiki: task.wikiLink,
                    minPlayerLevel: task.minPlayerLevel ? task.minPlayerLevel : 0,
                    faction: getFaction(faction),
                    forKappa: forKappa,
                    trader: {
                        connect: {
                            id: task.trader.id
                        }
                    },
                },
                create: {
                    id: task.id,
                    name: task.name,
                    experience: task.experience,
                    wiki: task.wikiLink,
                    minPlayerLevel: task.minPlayerLevel ? task.minPlayerLevel : 0,
                    faction: getFaction(faction),
                    forKappa: forKappa,
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
        console.log(task.name)
    }
    console.log(resultTasks.length)
    console.log(tasks.length)
}

export async function addItemIcons() {
    const items: { id: string; gridImageLink: string; iconLink: string; }[] = createItemIcons()
    let createdItems: Item[] = []
    let count: number = 1
    for (let item of items) {
        try {
            const res: Item = await prisma.item.update({
                where: {
                    id: item.id
                },
                data: {
                    icon: item.iconLink,
                    nameIcon: item.gridImageLink
                }
            })
            createdItems.push(res)
            console.log(count)
            count += 1
        } catch (error) {
            console.log('addItemIcons', error)
        }
    }
    console.log(createdItems.length, items.length)
}

export async function deleteTaskConnections() {
    const reqItems = await prisma.taskReqItem.deleteMany()
    const reqTasks = await prisma.taskReqTask.deleteMany()
    const rewItems = await prisma.taskRewardsItem.deleteMany()
    const reqKeys = await prisma.taskReqKey.deleteMany()
    const hasObj = await prisma.taskHasObjective.deleteMany()
    const onMaps = await prisma.taskOnMap.deleteMany()

    console.log('reqItems', reqItems)
    console.log('reqTasks', reqTasks)
    console.log('rewItems', rewItems)
    console.log('reqKeys', reqKeys)
    console.log('hasObj', hasObj)
    console.log('onMaps', onMaps)
}

export async function addCrafts() {
    const crafts = createCrafts()
    let result: Craft[] = []
    for (let craft of crafts) {
        const stationId: string = `${craft.station.id}-${craft.level}`
        const res: Craft = await prisma.craft.create({
            data: {
                duration: craft.duration,
                HideoutStation: {
                    connect: {
                        id: stationId
                    }
                },
            }
        })
        result.push(res)
        for (let req of craft.requiredItems) {
            await prisma.craftReqItem.create({
                data: {
                    count: req.count,
                    Craft: {
                        connect: {
                            id: res.id
                        }
                    },
                    item: {
                        connect: {
                            id: req.item.id
                        }
                    }
                }
            })
        }
        for (let rew of craft.rewardItems) {
            await prisma.craftRewItem.create({
                data: {
                    count: rew.count,
                    Craft: {
                        connect: {
                            id: res.id
                        }
                    },
                    item: {
                        connect: {
                            id: rew.item.id
                        }
                    }
                }
            })
        }
    }
    console.log(crafts.length, result.length)
}

export async function addBarters() {
    const barters = createBarters()
    let result: Barter[] = []
    console.log(barters.length)
    for (let barter of barters) {
        const res: Barter = await prisma.barter.create({
            data: {
                traderLevel: barter.level,
                trader: {
                    connect: {
                        id: barter.trader.id
                    }
                }
            }
        })
        result.push(res)
        for (let req of barter.requiredItems) {
            await prisma.barterReqItem.create({
                data: {
                    count: req.count,
                    Barter: {
                        connect: {
                            id: res.id
                        }
                    },
                    item: {
                        connect: {
                            id: req.item.id
                        }
                    }
                }
            })
        }
        for (let rew of barter.rewardItems) {
            await prisma.barterRewItem.create({
                data: {
                    count: rew.count,
                    Barter: {
                        connect: {
                            id: res.id
                        }
                    },
                    item: {
                        connect: {
                            id: rew.item.id
                        }
                    }
                }
            })
        }
        console.log(barters.length, result.length)
    }
    console.log(barters.length, result.length)
}


export async function addCraftable(): Promise<Item[]> {
    const items: { id: string, name: string }[] = createCraftItemsList()
    let result: Item[] = []
    for (const item of items) {
        const res = await prisma.item.update({
            where: {
                id: item.id
            },
            data: {
                craftAble: true
            }
        })
        result.push(res)
    }
    return result
}

export async function connectHideouts() {
    const hideouts = createHideouts()
    let resultTraders = []
    let resultSkills = []
    let resultItems = []
    let resultReqHideouts = []
    let count: number = 0

    for (const hideout of hideouts) {
        for (const station of hideout.levels) {
            /*
            for (const reqs of station.stationLevelRequirements) {
                const reqId: string = reqs.station.id + '-' + reqs.level
                console.log(reqId)
                console.log(station.id)
                console.log('----------------')

                const res = await prisma.hideoutReqHideout.create({
                    data: {
                        station: {
                            connect: {
                                id: station.id
                            }
                        },
                        requires: {
                            connect: {
                                id: reqId
                            }
                        }
                    }
                })
                console.log(res)

            }
            */
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
            /*
                       for (const stationReq of station.stationLevelRequirements) {
                           let id: string = stationReq.station.id + '-' + stationReq.level
                           const resStationReq = await prisma.hideoutReqHideout.create({
                               data: {
                                   stationId: station.id,
                                   requiresId: id,
                               }
                           })
                           resultReqHideouts.push(resStationReq)
                       } 
           */
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

export async function addRemainingTasks(player: Player) {
    const tasks = await getTasks()
    let result = []
    for (let task of tasks) {
        let isAdded = false
        if (task.faction === "BEAR") {
            isAdded = true
        }
        if (!isAdded) {
            const res = await prisma.playerHasTasks.create({
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
            console.log(task.name)
            result.push(res)
        }
    }
    console.log(result)
    console.log(result.length)
}

export async function deletePlayerTasks() {
    await prisma.playerHasTasks.deleteMany()
    console.log('deleted')
}


export async function connectTasks() {
    const tasks = formatTaskData()
    let count = 0

    let resultMaps = []
    let resultObj = []
    let resultKey = []
    let resultReward = []
    let resultRequest = []
    let resultItems = []

    for (const task of tasks) {
        if (task.items.length) {
            for (const item of task.items) {
                const resItem = await prisma.taskReqItem.create({
                    data: {
                        task: {
                            connect: {
                                id: task.id
                            },
                        },
                        item: {
                            connect: {
                                id: item.itemId
                            },
                        },
                        count: item.count,
                        foundInRaid: item.foundInRaid,
                    }
                })
                resultItems.push(resItem)
            }
        }
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

        for (const objective of task.objectives) {
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

        if (task.maps && task.maps.length) {
            count += task.maps.length
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
        count += 1
        console.log(count, task.name)
    }
    console.log('count', count)
    console.log('Reqs', resultRequest.length)
    console.log('Maps', resultMaps.length)
    console.log('Objs', resultObj.length)
    console.log('Keys', resultKey.length)
    console.log('Rewards', resultReward.length)
    console.log('Items', resultItems.length)
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
            },
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