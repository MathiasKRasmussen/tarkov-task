import type { Item, PlayerHasTasks, TaskReqItem } from "@prisma/client";


function convertPlayerTaskItemsToItem(playerTasks: PlayerHasTasks[]): TaskReqItem[] {
    let items: TaskReqItem[] = []
    for (const playerTask of playerTasks) {
        for (const taskItem of playerTask.task.TaskReqItem) {
            items.push(taskItem)
        }
    }
    return items
}

// Gets all items needed for all tasks
export function getRequiredTaskItems(playerTasks: PlayerHasTasks[]): Item[] {
    let items: TaskReqItem[] = convertPlayerTaskItemsToItem(playerTasks)
    //let sortedItems: TaskReqItem[] = []
    let sortedItems: Item[] = []
    items.forEach((item: TaskReqItem) => {
        let alreadyAdded: boolean = false
        // Check if item already added to sorted list
        sortedItems.forEach((sortedItem: Item) => {
            if (item.item.id === sortedItem.id) {
                // Item has counter for 'in raid' and not 
                if (item.foundInRaid) {
                    sortedItem.inRaidCount += item.count
                } else {
                    sortedItem.otherCount += item.count
                }
                alreadyAdded = true
            }
        })
        // If item has not been added
        if (!alreadyAdded) {
            // IF item needs to be found in raid
            if (item.foundInRaid) {
                item.item.inRaidCount = item.count
                item.item.otherCount = 0
            } else {
                item.item.inRaidCount = 0
                item.item.otherCount = item.count
            }
            sortedItems.push(item.item)
        }
    })
    sortedItems.sort(compareItemNames)
    return sortedItems
}


export function compareItemNames(a: Item, b: Item) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}