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
    
    let skills: string[] = []
    hideoutData.hideoutStations.forEach((station) => {
        station.levels.forEach((level) => {
            level.skillRequirements.forEach((skill) => {
                if(!skills.includes(skill.name)){
                    skills.push(skill.name)
                }
            })
        })
    })
    console.log(skills)
    
}