var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  a: () => getKeys,
  g: () => getItem,
  s: () => searchItems
});
module.exports = __toCommonJS(stdin_exports);
var import_prisma_e464139b = require("./prisma-e464139b.js");
async function getItem(id) {
  try {
    const item = await import_prisma_e464139b.p.item.findFirst({
      where: {
        id
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
        }
      }
    });
    return item;
  } catch (error) {
    console.log("getItem", error);
  }
}
async function searchItems(input) {
  let result = [];
  try {
    result = await import_prisma_e464139b.p.item.findMany({
      where: {
        OR: [
          {
            name: {
              contains: input,
              mode: "insensitive"
            }
          },
          {
            name: {
              contains: input,
              mode: "insensitive"
            }
          }
        ]
      }
    });
  } catch (error) {
    console.log("searchItems", error);
  }
  return result;
}
async function getKeys(player) {
  try {
    const result = await import_prisma_e464139b.p.itemHasType.findMany({
      where: {
        type: {
          name: "keys"
        }
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    return result;
  } catch (error) {
    console.log("getKeys", error);
  }
}
