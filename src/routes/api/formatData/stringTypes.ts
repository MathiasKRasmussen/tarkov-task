import { createItems } from "$lib/db/data/formatData"
import { addHideout, addItems, addItemTypes, addMaps, addSkills, addTraders, addTypesToItems, connectHideouts, findItems } from "$lib/db/data/uploadData"

export async function post({ request }) {
    console.log("POST")
    connectHideouts()
    console.log("DONE POST")
    return {
        body: {
            message: 'message',
        },
    }
}