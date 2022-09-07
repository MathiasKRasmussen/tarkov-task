import { searchItems } from "$lib/db/models/items"
import { getRequiredTaskItemsSearch } from "$lib/util/formatItems"
import type { Item } from "@prisma/client"

// Post endpoint for searching for items
export async function post({ request }: { request: any }) {
    let data = await request.json()
    let success: boolean = true
    let tempItems: Item[] = await searchItems(data.searchText, data.$userName)
    const items: Item[] = getRequiredTaskItemsSearch(tempItems)
    return {
        body: {
            items,
            success: success,
        },
    }
}