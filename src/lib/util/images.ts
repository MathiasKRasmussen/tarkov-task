
// TODO: Add to db
export function getTraderImage(name: string): string {
    switch (name) {
        case 'Prapor': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6b/Prapor_Portrait.png'
        case 'Therapist': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c7/Therapist_Portrait.png'
        case 'Skier': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0a/Skier_Portrait.png'
        case 'Peacekeeper': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/08/Peacekeeper_Portrait.png'
        case 'Mechanic': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ef/Mechanic_Portrait.png'
        case 'Ragman': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8b/Ragman_Portrait.png'
        case 'Jaeger': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d1/Jaeger_Portrait.png'
        case 'Fence': return 'https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f7/Fence_Portrait.png'
        default: return ''
    }
}