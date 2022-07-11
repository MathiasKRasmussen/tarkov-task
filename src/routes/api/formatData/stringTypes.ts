import { createItems } from "$lib/db/data/formatData"
import { addHideout, addItems, addItemTypes, addMaps, addSkills, addTasks, addTraders, addTypesToItems, connectHideouts, connectTasks, findItems } from "$lib/db/data/uploadData"

export async function post({ request }) {
    console.log("POST")
    connectTasks()
    console.log("DONE POST")
    return {
        body: {
            message: 'message',
        },
    }
}