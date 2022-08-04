export const euroRUBValue: number = 127
export const usdRUBValue: number = 114

export function currencySymbol(currency: string): string {
    switch (currency) {
        case 'RUB': return '₽'
        case 'USD': return '$'
        case 'EUR': return '€'
        default: return '₽'
    }
}

// Finds the trader to sell to for most profit
export function bestTraderToSell(sellfor: { price: number, currency: string, vendor: { name: string } }[]): { price: number, currency: string, vendor: { name: string } } {
    let bestOffer: { price: number, currency: string, vendor: { name: string } }
    sellfor.forEach((offer) => {
        if (offer.vendor.name !== 'Flea Market') {
            if (!bestOffer) bestOffer = offer
            else if (isBetterValue(bestOffer.price, offer)) bestOffer = offer
        }
    })
    return bestOffer
}

// Compares the different sale prices in different currencies
function isBetterValue(current: number, offer: { price: number, currency: string, vendor: { name: string } }): boolean {
    if (offer.currency === 'RUB') return offer.price > current
    else if (offer.currency === 'USD') return (offer.price * usdRUBValue) > current
    else if (offer.currency === 'EUR') return (offer.price * euroRUBValue) > current
    return false
}

// Gets the current Flea Price
export function getFleaCurrentPrice(sellfor: { price: number, currency: string, vendor: { name: string } }[]): number {
    sellfor.forEach((offer) => {
        if (offer.vendor.name === 'Flea Market') return offer.price
        console.log(offer)
    })
    return 0
}