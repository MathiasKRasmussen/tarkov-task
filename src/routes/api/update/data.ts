import { getPlayer } from "$lib/db/data/player"
import { addBarters, addCrafts, addItemIcons, addRemainingTasks, connectTasks, deletePlayerTasks, deleteTaskConnections, updateTasks } from "$lib/db/data/uploadData"
import type { Player } from "@prisma/client"
import { request, gql } from 'graphql-request'

export async function post() {
    //let data = await request.json()
    console.log('DAB')
    const query = gql`
    {
        items(name: "m855") {
            id
            low24hPrice
            avg24hPrice
            high24hPrice
        }
    }
    `
    request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))

    let success: boolean = true
    return {
        body: {
            success: success,
            message: success ? 'Success' : 'Failed',
        },
    }
}