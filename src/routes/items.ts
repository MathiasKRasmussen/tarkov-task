import { userId } from "$lib/db/data/formatData"
import { getPlayer } from "$lib/db/data/player"
import { getPlayerTasks, getPlayerTasksItems } from "$lib/db/models/tasks"
import { getRequiredTaskItems } from "$lib/util/formatItems"

export async function get({ params }) {
    const playerTasks = await getPlayerTasksItems(userId)
    const taskItems = getRequiredTaskItems(playerTasks)
    return {
        body: {
            taskItems,
        },
    }
}