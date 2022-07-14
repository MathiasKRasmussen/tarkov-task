import { prisma } from '$lib/db/prisma';
import type { HideoutStation } from '@prisma/client';

export async function getHideoutStations(): Promise<HideoutStation[]> {
    let stations: HideoutStation[] = []
    try {
        stations = await prisma.hideoutStation.findMany({
            include: {
                Hideout: true
            }
        })
    } catch (error) {
        console.log('getHideoutStations', error)
    }
    return stations
}