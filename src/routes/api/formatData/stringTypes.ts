import { createItems } from "$lib/db/data/formatData"
import { addItems, addItemTypes, addMaps, addSkills, addTraders, addTypesToItems, findItems } from "$lib/db/data/uploadData"

export async function post({ request }) {
    console.log("POST")
    console.log("DONE POST")
    return {
        body: {
            message: 'message',
        },
    }
}