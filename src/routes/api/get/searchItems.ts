import { searchItems } from "$lib/db/models/items"
import type { Item } from "@prisma/client"

// Post endpoint for searching for items
export async function post({ request }: { request: any }) {
    let data = await request.json()
    let success: boolean = true
    const items: Item[] = await searchItems(data.searchText)
    return {
        body: {
            items,
            success: success,
        },
    }
}