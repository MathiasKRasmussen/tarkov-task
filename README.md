# Tarkov Tasker (Escape from Tarkov)
This is the repository for [Tarkov Tasker](https://tarkov-tasker.netlify.app/), which is a web applications that allows players of the game, [*Escape from Tarkov*](https://www.escapefromtarkov.com/), to track their tasks and hideout and view other game information.

Tarkov Tasker uses data from the following projects:
 - [Tarkov API](https://github.com/the-hideout/tarkov-api)
 - [tarkovdata](https://github.com/TarkovTracker/tarkovdata)

All data is stored on a PostgreSQL database using [supabase](https://app.supabase.com/) and is accessed using [Prisma](https://www.prisma.io/). The schema for the database can be found [here](https://github.com/MathiasKRasmussen/tarkov-task/blob/master/prisma/schema.prisma)

## Player
A user can create a player and view information regarding their progress in Escape from Tarkov.

![The Player profile](https://media.discordapp.net/attachments/473943043117023244/1006924680407568444/unknown.png?width=720&height=565)
## Tasks
The user can view all tasks in the game and mark them as completed. The tasks are sorted by the eight different traders and all details about the tasks are available, such as objectives and rewards.

![Overview of all tasks](https://media.discordapp.net/attachments/473943043117023244/1006925463949676625/unknown.png?width=720&height=605)

## Hideout
The user can track their hideout by marking, what stations have been build. The requirements for each station is also displayed.

![Hideout overview](https://media.discordapp.net/attachments/473943043117023244/1006926173797896242/unknown.png?width=720&height=605)

## Items
The user can see all the items they still need to aquire for tasks and hideout stations. It is also possible to search for all items in the game.

![Items page](https://media.discordapp.net/attachments/473943043117023244/1006926801051861002/unknown.png?width=720&height=601)

### Item
A user can also click on an item and view more information regarding it. Such as sell/buy prices from traders and the flea market. The page also shows which tasks/hideout stations the item is needed for. 

![Item page top](https://media.discordapp.net/attachments/473943043117023244/1006927068220620930/unknown.png?width=720&height=515)

The item page also displays the crafts and barter trades the item is used for or rewarded from

![Item page showing crafts and barter trades](https://media.discordapp.net/attachments/473943043117023244/1006927747232309349/unknown.png?width=720&height=687)
