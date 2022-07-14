import { createItems } from "$lib/db/data/formatData"
import { createPlayer, getPlayer } from "$lib/db/data/player"
import { addHideout, addItems, addItemTypes, addMaps, addSkills, addTasks, addTraders, addTypesToItems, connectHideouts, connectTasks, findItems } from "$lib/db/data/uploadData"
import { getHideoutStations } from "$lib/db/models/hideouts"
import { getPlayerTasks, getTasks } from "$lib/db/models/tasks"
import type { Player } from "@prisma/client"

export async function post({ request }) {
    console.log("POST")
    const player: Player = await getPlayer('Radelly')
    await getPlayerTasks(player)
    console.log("DONE POST")
    return {
        body: {
            message: 'message',
        },
    }
}