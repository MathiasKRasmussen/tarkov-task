import { updatePlayerStations } from "$lib/db/models/hideouts"

// Post endpoint for updating which hideout stations have been completed
export async function post({ request }: { request: any }) {
    let data = await request.json()
    let success: boolean = await updatePlayerStations(data.updatedPlayerStations)
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}