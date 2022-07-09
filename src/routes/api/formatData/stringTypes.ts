import { addItemTypes, addSkills } from "$lib/db/data/uploadData"

export async function post({ request }) {
    console.log("POST")
    await addSkills()
    await addItemTypes()
    return {
        body: {
            message: 'message',
        },
    }
}