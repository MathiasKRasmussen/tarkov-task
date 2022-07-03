import type { Map, Trader } from '@prisma/client';

import itemsData from './json/items.json';
import tradersData from './json/traders.json';
import mapsData from './json/maps.json'
import typesData from './json/types.json'


export function createTypesList() {
    let types: string[] = []
    typesData.items.forEach((item) => {
        item.types.forEach((type) => {
            if(!types.includes(type)){
                types.push(type)
                console.log(type)
            }
        })
    })
    console.log(types)
}