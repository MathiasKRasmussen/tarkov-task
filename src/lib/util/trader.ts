import type { Trader } from "@prisma/client";

// Get trader level
export function getTraderLevel(trader: Trader): number {
    return trader.PlayerHasTrader.length ? trader.PlayerHasTrader[0].level : 1;
}

// Convert trader level from Int to Roman
export function getTraderRomanLevel(trader: Trader): string {
    const level: number = getTraderLevel(trader);
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