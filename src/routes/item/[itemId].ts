import { getItem } from '$lib/db/models/items'
import { getTraders } from '$lib/db/models/traders'
import type { Item, Trader } from '@prisma/client'
import { request, gql } from 'graphql-request'
export async function get({ params }) {
    const { itemId } = params
    const item: Item = await getItem(itemId)
    const traders: Trader[] = await getTraders()
    let priceData;
    const query = gql`
    {
        item(id: "${itemId}") {
            low24hPrice
            avg24hPrice
            high24hPrice
            sellFor {
                price
                currency
                vendor {
                    name
                }
            }
            buyFor {
                price
                currency
                vendor {
                    name
                }
            }
        }
    }
    `
    await request('https://api.tarkov.dev/graphql', query).then((data) => priceData = data.item)
    console.log(item, priceData)
    return {
        body: {
            item,
            priceData,
            traders
        },
    }
}