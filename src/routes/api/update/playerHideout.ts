import { updatePlayerStations } from "$lib/db/models/hideouts"

export async function post({ request }) {
    let data = await request.json()
    let success: boolean = await updatePlayerStations(data.updatedPlayerStations)
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}