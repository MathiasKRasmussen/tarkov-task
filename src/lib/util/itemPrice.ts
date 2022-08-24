export const euroRUBValue: number = 127
export const usdRUBValue: number = 114

// Gets the symbol for each currency
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
    })
    return 0
}

// Returns the profit (fleaPrice - traderPrice) also taking currency into account
export function fleaProfit(fleaPrice: number, traderPrice: number, currency: string): number {
    if (currency === 'RUB') {
        return fleaPrice - traderPrice
    } else if (currency === 'USD') {
        return fleaPrice - (traderPrice * usdRUBValue)
    } else if (currency === 'EUR') {
        return fleaPrice - (traderPrice * euroRUBValue)
    }
    return 0
}

// Converts a value in 'inputCurrency' to 'outputCurrency
export function convertCurrency(price: number, inputCurrency: string, outputCurrency: string): number {
    if (inputCurrency === 'RUB') {
        if (outputCurrency === 'USD') return price / usdRUBValue
        else if (outputCurrency === 'EUR') return price / euroRUBValue
    } else if (inputCurrency === 'USD') {
        if (outputCurrency === 'RUB') return price * usdRUBValue
        else if (outputCurrency === 'EUR') return (price * usdRUBValue) / euroRUBValue
    } else if (inputCurrency === 'EUR') {
        if (outputCurrency === 'RUB') return price * euroRUBValue
        else if (outputCurrency === 'USD') return (price * euroRUBValue) / usdRUBValue
    }
    return price
}