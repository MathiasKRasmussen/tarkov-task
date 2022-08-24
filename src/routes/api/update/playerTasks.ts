import { updatePlayerTasks } from "$lib/db/models/tasks"

// Post endpoint for updating which tasks have been completed
export async function post({ request }: { request: any }) {
    let data = await request.json()
    let success: boolean = await updatePlayerTasks(data.updatedPlayerTasks)
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}