import { getPlayer } from "$lib/db/data/player"
import { addRemainingTasks, connectTasks, deletePlayerTasks, deleteTaskConnections, updateTasks } from "$lib/db/data/uploadData"
import type { Player } from "@prisma/client"

export async function post({ request }) {
    let data = await request.json()
    let success: boolean = true
    //await connectTasks()
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}