import { searchItems } from "$lib/db/models/items"
import type { Item } from "@prisma/client"

export async function post({ request }) {
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