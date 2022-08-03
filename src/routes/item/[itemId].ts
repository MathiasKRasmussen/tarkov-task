import { getItem } from '$lib/db/models/items'
import type { Item } from '@prisma/client'
import { request, gql } from 'graphql-request'
export async function get({ params }) {
    const { itemId } = params
    const item: Item = await getItem(itemId)
    console.log(item)
    const query = gql`
    {
        item(id: "${itemId}") {
            low24hPrice
            avg24hPrice
            high24hPrice
        }
    }
    `
    request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))
    return {
        body: {
            itemId
        },
    }
}