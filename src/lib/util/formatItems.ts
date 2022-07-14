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
export function getRequiredTaskItems(playerTasks: PlayerHasTasks[]): TaskReqItem[] {
    let items: TaskReqItem[] = convertPlayerTaskItemsToItem(playerTasks)
    let sortedItems: TaskReqItem[] = []
    items.forEach((item: TaskReqItem) => {
        let alreadyAdded: boolean = false
        // Check if item already added to sorted list
        sortedItems.forEach((sortedItem: TaskReqItem) => {
            // Item has to be the same and have same 'foundInRaid' state
            if (item.item.id === sortedItem.item.id && item.foundInRaid === sortedItem.foundInRaid) {
                sortedItem.count += item.count
                alreadyAdded = true
            }
        })
        // If item has not been added
        if (!alreadyAdded) {
            sortedItems.push(item)
        }
    })
    sortedItems.sort(compareItemNames)
    return sortedItems
}


export function compareItemNames(a: TaskReqItem, b: TaskReqItem) {
    if (a.item.name < b.item.name) {
        return -1;
    }
    if (a.item.name > b.item.name) {
        return 1;
    }
    return 0;
}