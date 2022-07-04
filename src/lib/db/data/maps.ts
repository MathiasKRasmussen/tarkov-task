import type { HideoutStation, Map, Trader } from '@prisma/client';

import itemsData from './json/items.json';
import tradersData from './json/traders.json';
import mapsData from './json/maps.json'
import typesData from './json/types.json'
import hideoutData from './json/hideoutStations.json'


export function createTypesList() {
    let types: string[] = []
    typesData.items.forEach((item) => {
        item.types.forEach((type) => {
            if(!types.includes(type)){
                types.push(type)
            }
        })
    })
    console.log(hideoutData.hideoutStations[0])
    let station: HideoutStation = {id: '', name: '', constructionTime: 0, level: 0}
    station.name = hideoutData.hideoutStations[0].name
    station.id = hideoutData.hideoutStations[0].id
    station.constructionTime = hideoutData.hideoutStations[0].levels[0].constructionTime
    station.level = hideoutData.hideoutStations[0].levels[0].level
    
}