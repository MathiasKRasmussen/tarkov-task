import type { Item } from "@prisma/client";

export function isMoney(item: Item) {
    return item.shortName === 'RUB' || item.shortName === 'USD' || item.shortName === 'EUR'
}

export function isRUB(item: Item): boolean {
    return item.shortName === 'RUB'
}
export function isUSD(item: Item): boolean {
    return item.shortName === 'USD'
}
export function isEUR(item: Item): boolean {
    return item.shortName === 'EUR'
}