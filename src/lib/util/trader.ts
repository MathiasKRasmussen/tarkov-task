import type { Trader } from "@prisma/client";

// Get trader level
export function getTraderLevel(trader: Trader): number {
    return trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1;
}

// Convert trader level from Int to Roman
export function getTraderRomanLevel(level: number): string {
    switch (level) {
        case 1:
            return 'I';
        case 2:
            return 'II';
        case 3:
            return 'III';
        case 4:
            return '♕';
        default:
            return 'I';
    }
}

export function getTraderRomanList(): string[] {
    return ['I', 'II', 'III', '♕']
}

export function eftSort(traders: Trader[]) {
    let newTraders: Trader[] = []
    newTraders.push(getTrader(traders, 'Prapor'))
    newTraders.push(getTrader(traders, 'Therapist'))
    newTraders.push(getTrader(traders, 'Fence'))
    newTraders.push(getTrader(traders, 'Skier'))
    newTraders.push(getTrader(traders, 'Peacekeeper'))
    newTraders.push(getTrader(traders, 'Mechanic'))
    newTraders.push(getTrader(traders, 'Ragman'))
    newTraders.push(getTrader(traders, 'Jaeger'))
    return newTraders
}

function getTrader(traders: Trader[], name: string): Trader {
    for (let trader of traders) {
        if (trader.name === name) return trader
    }
    return traders[0]
}