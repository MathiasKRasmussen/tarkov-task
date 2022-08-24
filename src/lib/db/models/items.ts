import { prisma } from '$lib/db/prisma';
import type { Item, ItemHasType, Player } from '@prisma/client';

// Gets all items
export async function getAllItems(): Promise<Item[]> {
    let result: Item[] = []
    try {
        result = await prisma.item.findMany()
    } catch (error) {
        console.log('getAllItems', error)
    }
    return result
}

// Get a single item with all relations
export async function getItem(id: string): Promise<Item> {
    try {
        const item = await prisma.item.findFirst({
            where: {
                id: id
            },
            include: {
                TaskReqItem: {
                    include: {
                        task: true
                    }
                },
                TaskRewardsItem: {
                    include: {
                        task: true
                    }
                },
                TaskReqKey: {
                    include: {
                        task: true
                    }
                },
                ItemHasType: {
                    include: {
                        type: true
                    }
                },
                CraftReqItem: {
                    include: {
                        Craft: {
                            include: {
                                HideoutStation: {
                                    include: {
                                        Hideout: true
                                    }
                                },
                                CraftReqItem: {
                                    include: {
                                        item: true
                                    }
                                },
                                CraftRewItem: {
                                    include: {
                                        item: true
                                    }
                                }
                            }
                        }
                    }
                },
                CraftRewItem: {
                    include: {
                        Craft: {
                            include: {
                                HideoutStation: {
                                    include: {
                                        Hideout: true
                                    }
                                },
                                CraftReqItem: {
                                    include: {
                                        item: true
                                    }
                                },
                                CraftRewItem: {
                                    include: {
                                        item: true
                                    }
                                }
                            }
                        }
                    }
                },
                BarterReqItem: {
                    include: {
                        Barter: {
                            include: {
                                trader: true,
                                BarterReqItem: {
                                    include: {
                                        item: true
                                    }
                                },
                                BarterRewItem: {
                                    include: {
                                        item: true
                                    }
                                }
                            }
                        }
                    }
                },
                BarterRewItem: {
                    include: {
                        Barter: {
                            include: {
                                trader: true,
                                BarterReqItem: {
                                    include: {
                                        item: true
                                    }
                                },
                                BarterRewItem: {
                                    include: {
                                        item: true
                                    }
                                }
                            }
                        }
                    }
                },
                HideoutReqItem: {
                    include: {
                        hideoutStation: {
                            include: {
                                Hideout: true
                            }
                        }
                    }
                },

            }
        })
        return item
    } catch (error) {
        console.log("getItem", error)
    }
}

// Searching for items with input string
export async function searchItems(input: string): Promise<Item[]> {
    let result: Item[] = []
    try {
        result = await prisma.item.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: input,
                            mode: 'insensitive',
                        },
                    },
                    {
                        shortName: {
                            contains: input,
                            mode: 'insensitive',
                        },
                    },
                ],
            }
        })
    } catch (error) {
        console.log('searchItems', error)
    }
    return result
}

// Gets all keys and if the player needs them for a tasks
export async function getKeys(player: Player): Promise<ItemHasType[]> {
    try {
        const result: ItemHasType[] = await prisma.itemHasType.findMany({
            where: {
                type: {
                    name: 'keys'
                },
            },
            include: {
                item: {
                    include: {
                        TaskReqItem: {
                            include: {
                                task: {
                                    include: {
                                        PlayerHasTasks: {
                                            where: {
                                                playerId: player.id
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        TaskReqKey: {
                            include: {
                                task: {
                                    include: {
                                        PlayerHasTasks: {
                                            where: {
                                                playerId: player.id
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    },
                }
            },
        })
        return result
    } catch (error) {
        console.log('getKeys', error)
    }
}