import { faction } from "@prisma/client"

export const maxLevel: number = 79;

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


export function factionFullName(f: faction): string {
    if (f === faction.USEC) {
        return 'United Security'
    } else {
        return 'Battle Encounter Assault Regiment'
    }
}