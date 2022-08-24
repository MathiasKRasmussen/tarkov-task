import type { Trader } from "@prisma/client"

export const maxLevel: number = 79;
const version1: string = 'Standard Edition'
const version2: string = 'Left Behind Edition'
const version3: string = 'Prepare for Escape Edition'
const version4: string = 'Edge of Darkness Limited Edition'

export function levelIcon(level: number) {
    if (level < 5) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8c/Rank5.png'
    } else if (level < 10) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/33/Rank10.png'
    } else if (level < 15) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6e/Rank15.png'
    } else if (level < 20) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/93/Rank20.png'
    } else if (level < 25) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9f/Rank25.png'
    } else if (level < 30) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e3/Rank30.png'
    } else if (level < 35) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1c/Rank35.png'
    } else if (level < 40) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Rank40.png'
    } else if (level < 45) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7f/Rank45.png'
    } else if (level < 50) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/14/Rank50.png'
    } else if (level < 55) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6e/Rank55.png'
    } else if (level < 60) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b8/Rank60.png'
    } else if (level < 65) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/43/Rank65.png'
    } else if (level < 70) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/Rank70.png'
    } else if (level < 75) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b0/Rank75.png'
    } else if (level < 80) {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/de/Rank80.png'
    } else {
        return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8c/Rank5.png'
    }
}


export function factionFullName(faction: string): string {
    if (faction === "USEC") {
        return 'United Security'
    } else {
        return 'Battle Encounter Assault Regiment'
    }
}

export function factionSVG(faction: string): string {
    if (faction === "USEC") {
        return 'https://svgur.com/i/m53.svg'
    } else {
        return 'https://svgur.com/i/m4u.svg'
    }
}

export function versionName(value: number): string {
    switch (value) {
        case 1: return version1
        case 2: return version2
        case 3: return version3
        case 4: return version4
        default: return version1
    }
}

export function versionList(): { value: number, name: string }[] {
    return [{ value: 1, name: version1 }, { value: 2, name: version2 }, { value: 3, name: version3 }, { value: 4, name: version4 }]
}

export function createTempPlayerTrader(traders: Trader[]): { trader: Trader, level: number }[] {
    let playerTraders: { trader: Trader, level: number }[] = []
    traders.forEach((trader) => {
        if (trader.PlayerHasTrader.length) {
            playerTraders.push({ trader: trader, level: trader.PlayerHasTrader[0].level })
        }
    })
    return playerTraders
}