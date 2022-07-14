import { faction, type Hideout, type HideoutStation, type Item, type Map, type Trader } from '@prisma/client';

import itemsData from './json/items.json';
import tradersData from './json/traders.json';
import mapsData from './json/maps.json'
import typesData from './json/types.json'
import hideoutData from './json/hideoutStations.json'
import taskData from './json/tasks.json'
import taskItemsData from './json/taskItems.json'

export const userId: string = 'cl5l4ouel3775h4v6oktmwitg'

export function getStashIds(version: number): string[] {
    const standard: string = '5d484fc0654e76006657e0ab-1'
    const leftBehind: string = '5d484fc0654e76006657e0ab-2'
    const prepareEscape: string = '5d484fc0654e76006657e0ab-3'
    const edgeOfDarkness: string = '5d484fc0654e76006657e0ab-4'
    let ids: string[] = []
    if (1 <= version && version <= 4) {
        ids.push(standard)
        if (version > 1) ids.push(leftBehind)
        if (version > 2) ids.push(prepareEscape)
        if (version > 3) ids.push(edgeOfDarkness)
    }
    return ids
}

export function createHideouts(): Hideout[] {
    return hideoutData.hideoutStations
}

export function createItems(): Item[] {
    return itemsData.items
}

export function createMaps(): Map[] {
    return mapsData
}

export function createTraders(): Trader[] {
    return tradersData
}

export function getFaction(name: string) {
    switch (name) {
        case 'USEC': return faction.USEC
        case 'BEAR': return faction.BEAR
        case 'ANY': return faction.Any
    }
    return faction.Any
}


export function formatTaskData() {
    let tasks = taskData.tasks
    tasks.forEach((task) => {
        // Adding a list of maps
        task.maps = []
        // From task object
        if (task.map) {
            task.maps.push(task.map.id)
        }
        // From task.objectives objects
        task.objectives.forEach((objective) => {
            objective.maps.forEach((map) => {
                if (!task.maps.includes(map.id)) {
                    task.maps.push(map.id)
                }
            })
        })

        // itemTasks
        task.items = []
        taskItemsData.tasks.forEach((itemTask) => {
            if (task.id === itemTask.gameId) {
                // Task for Kappa
                if (itemTask?.nokappa) { // Task is not required for Kappa
                    task.kappa = false
                } else { // Task is required for Kappa
                    task.kappa = true
                }

                // Add required items for task
                itemTask.objectives.forEach((objective) => {
                    switch (objective.type) {
                        case "find":    //  Has to be found in raid
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: true }); break
                        case "collect": // Item does not need to be found in raid 
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: false }); break
                        case "build":   // For Gunsmith - Not found in raid  
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: false }); break
                        default: break
                    }
                })
            }
        })
    })
    return tasks
}

export function createTypeList(): string[] {
    let types: string[] = []
    typesData.items.forEach((item) => {
        item.types.forEach((type) => {
            if (!types.includes(type)) {
                types.push(type)
            }
        })
    })
    return types
}

export function createSkillList(): string[] {
    let skills: string[] = []
    hideoutData.hideoutStations.forEach((station) => {
        station.levels.forEach((level) => {
            level.skillRequirements.forEach((skill) => {
                if (!skills.includes(skill.name)) {
                    skills.push(skill.name)
                }
            })
        })
    })
    return skills
}