import { prisma } from '$lib/db/prisma';
import type { ItemType, Skill } from '@prisma/client';
import { createSkillList, createTypeList } from "$lib/db/data/formatData"


/*
export async function addHideoutStations(): Promise<any> {
    const result = await prisma.hideoutStation.create({
        data: {
            
        }
    })
    return result
}*/

export async function addSkills(): Promise<Skill[]> {
    const skills: string[] = createSkillList()
    let result: Skill[] = []
    for (const skill of skills) {
        const res: Skill = await prisma.skill.create({
            data: {
                name: skill
            }
        })
    }
    console.log(result)
    return result
}

export async function addItemTypes(): Promise<ItemType[]> {
    const types: string[] = createTypeList()
    let result: ItemType[] = []
    for (const type of types) {
        const res: ItemType = await prisma.itemType.create({
            data: {
                name: type
            }
        })
    }
    console.log(result)
    return result
}