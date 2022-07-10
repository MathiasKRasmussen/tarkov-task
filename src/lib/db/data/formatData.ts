import type { Hideout, HideoutStation, Item, Map, Trader } from '@prisma/client';

import itemsData from './json/items.json';
import tradersData from './json/traders.json';
import mapsData from './json/maps.json'
import typesData from './json/types.json'
import hideoutData from './json/hideoutStations.json'
import taskData from './json/tasks.json'
import taskItemsData from './json/taskItems.json'


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


export function formatTaskData() {
    taskData.tasks.forEach((task) => {
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
        taskItemsData.tasks.forEach((itemTask) => {
            if (task.id === itemTask.gameId) {
                // Task for Kappa
                if (itemTask?.nokappa) { // Task is not required for Kappa
                    task.kappa = false
                } else { // Task is required for Kappa
                    task.kappa = true
                }

                // Add required items for task
                task.items = []
                itemTask.objectives.forEach((objective) => {
                    switch (objective.type) {
                        case "find":    //  Has to be found in raid
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: true }); break
                        case "collect": // Item does not need to be found in raid 
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: false }); break
                        case "build":   // For Gunsmith - Not found in raid  
                            task.items.push({ itemId: objective.target, count: objective.number, foundInRaid: false }); break
                        default: return
                    }
                })
            }
        })
    })
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