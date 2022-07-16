import type { PlayerHasTasks } from "@prisma/client";

export function compareTaskNames(a: PlayerHasTasks, b: PlayerHasTasks) {
    if (a.task.name < b.task.name) {
        return -1;
    }
    if (a.task.name > b.task.name) {
        return 1;
    }
    return 0;
}