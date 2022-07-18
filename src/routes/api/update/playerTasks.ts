import { addCrafts } from "$lib/db/data/uploadData"
import { updatePlayerTasks } from "$lib/db/models/tasks"

export async function post({ request }) {
    let data = await request.json()
    let success: boolean = await updatePlayerTasks(data.updatedPlayerTasks)
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}