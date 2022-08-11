-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "level" INTEGER NOT NULL DEFAULT 0,
    "faction" TEXT NOT NULL DEFAULT 'USEC',

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerHasTrader" (
    "traderId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "PlayerHasTrader_pkey" PRIMARY KEY ("playerId","traderId")
);

-- CreateTable
CREATE TABLE "Trader" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "wiki" TEXT,
    "image" TEXT,

    CONSTRAINT "Trader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Map" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "wiki" TEXT,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "wiki" TEXT,
    "image" TEXT,
    "craftAble" BOOLEAN NOT NULL DEFAULT false,
    "icon" TEXT,
    "nameIcon" TEXT,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barter" (
    "id" TEXT NOT NULL,
    "traderId" TEXT NOT NULL,
    "traderLevel" INTEGER NOT NULL,

    CONSTRAINT "Barter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarterReqItem" (
    "count" DOUBLE PRECISION NOT NULL,
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "barterId" TEXT NOT NULL,

    CONSTRAINT "BarterReqItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BarterRewItem" (
    "count" DOUBLE PRECISION NOT NULL,
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "barterId" TEXT NOT NULL,

    CONSTRAINT "BarterRewItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Craft" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "stationId" TEXT NOT NULL,

    CONSTRAINT "Craft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CraftReqItem" (
    "count" DOUBLE PRECISION NOT NULL,
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "craftId" TEXT NOT NULL,

    CONSTRAINT "CraftReqItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CraftRewItem" (
    "count" DOUBLE PRECISION NOT NULL,
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "craftId" TEXT NOT NULL,

    CONSTRAINT "CraftRewItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "wiki" TEXT NOT NULL,
    "minPlayerLevel" INTEGER NOT NULL,
    "forKappa" BOOLEAN NOT NULL,
    "traderId" TEXT NOT NULL,
    "faction" TEXT NOT NULL DEFAULT 'Any',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskReqTask" (
    "taskId" TEXT NOT NULL,
    "requiresId" TEXT NOT NULL,

    CONSTRAINT "TaskReqTask_pkey" PRIMARY KEY ("taskId","requiresId")
);

-- CreateTable
CREATE TABLE "ItemHasType" (
    "id" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "ItemHasType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hideout" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hideout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HideoutStation" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "constructionTime" INTEGER NOT NULL,
    "hideoutId" TEXT NOT NULL,

    CONSTRAINT "HideoutStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HideoutReqHideout" (
    "stationId" TEXT NOT NULL,
    "requiresId" TEXT NOT NULL,

    CONSTRAINT "HideoutReqHideout_pkey" PRIMARY KEY ("stationId","requiresId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "wiki" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HideoutReqItem" (
    "count" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "hideoutStationId" TEXT NOT NULL,

    CONSTRAINT "HideoutReqItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HideoutReqSkill" (
    "level" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "hideoutStationId" TEXT NOT NULL,

    CONSTRAINT "HideoutReqSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HideoutReqTrader" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "traderId" TEXT NOT NULL,
    "hideoutStationId" TEXT NOT NULL,

    CONSTRAINT "HideoutReqTrader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerHasHideout" (
    "id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "playerId" TEXT NOT NULL,
    "hideoutStationId" TEXT NOT NULL,

    CONSTRAINT "PlayerHasHideout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskOnMap" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "mapId" TEXT NOT NULL,

    CONSTRAINT "TaskOnMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskReqKey" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "TaskReqKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskRewardsItem" (
    "count" INTEGER NOT NULL,
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "TaskRewardsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskReqItem" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "foundInRaid" BOOLEAN NOT NULL,
    "itemId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "TaskReqItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskHasObjective" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "optional" BOOLEAN,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "TaskHasObjective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerHasTasks" (
    "id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "playerId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,

    CONSTRAINT "PlayerHasTasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_id_key" ON "Player"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Trader_id_key" ON "Trader"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Map_id_key" ON "Map"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Barter_id_key" ON "Barter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BarterReqItem_id_key" ON "BarterReqItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BarterRewItem_id_key" ON "BarterRewItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Craft_id_key" ON "Craft"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CraftReqItem_id_key" ON "CraftReqItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CraftRewItem_id_key" ON "CraftRewItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemType_id_key" ON "ItemType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemType_name_key" ON "ItemType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemHasType_id_key" ON "ItemHasType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hideout_id_key" ON "Hideout"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hideout_name_key" ON "Hideout"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HideoutStation_id_key" ON "HideoutStation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_id_key" ON "Skill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HideoutReqItem_id_key" ON "HideoutReqItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HideoutReqSkill_id_key" ON "HideoutReqSkill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "HideoutReqTrader_id_key" ON "HideoutReqTrader"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerHasHideout_id_key" ON "PlayerHasHideout"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskOnMap_id_key" ON "TaskOnMap"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskReqKey_id_key" ON "TaskReqKey"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskRewardsItem_id_key" ON "TaskRewardsItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskReqItem_id_key" ON "TaskReqItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TaskHasObjective_id_key" ON "TaskHasObjective"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerHasTasks_id_key" ON "PlayerHasTasks"("id");

-- AddForeignKey
ALTER TABLE "PlayerHasTrader" ADD CONSTRAINT "PlayerHasTrader_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerHasTrader" ADD CONSTRAINT "PlayerHasTrader_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "Trader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Barter" ADD CONSTRAINT "Barter_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "Trader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarterReqItem" ADD CONSTRAINT "BarterReqItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarterReqItem" ADD CONSTRAINT "BarterReqItem_barterId_fkey" FOREIGN KEY ("barterId") REFERENCES "Barter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarterRewItem" ADD CONSTRAINT "BarterRewItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarterRewItem" ADD CONSTRAINT "BarterRewItem_barterId_fkey" FOREIGN KEY ("barterId") REFERENCES "Barter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Craft" ADD CONSTRAINT "Craft_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftReqItem" ADD CONSTRAINT "CraftReqItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftReqItem" ADD CONSTRAINT "CraftReqItem_craftId_fkey" FOREIGN KEY ("craftId") REFERENCES "Craft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftRewItem" ADD CONSTRAINT "CraftRewItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CraftRewItem" ADD CONSTRAINT "CraftRewItem_craftId_fkey" FOREIGN KEY ("craftId") REFERENCES "Craft"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "Trader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqTask" ADD CONSTRAINT "TaskReqTask_requiresId_fkey" FOREIGN KEY ("requiresId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqTask" ADD CONSTRAINT "TaskReqTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemHasType" ADD CONSTRAINT "ItemHasType_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemHasType" ADD CONSTRAINT "ItemHasType_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "ItemType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutStation" ADD CONSTRAINT "HideoutStation_hideoutId_fkey" FOREIGN KEY ("hideoutId") REFERENCES "Hideout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqHideout" ADD CONSTRAINT "HideoutReqHideout_requiresId_fkey" FOREIGN KEY ("requiresId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqHideout" ADD CONSTRAINT "HideoutReqHideout_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqItem" ADD CONSTRAINT "HideoutReqItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqItem" ADD CONSTRAINT "HideoutReqItem_hideoutStationId_fkey" FOREIGN KEY ("hideoutStationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqSkill" ADD CONSTRAINT "HideoutReqSkill_hideoutStationId_fkey" FOREIGN KEY ("hideoutStationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqSkill" ADD CONSTRAINT "HideoutReqSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqTrader" ADD CONSTRAINT "HideoutReqTrader_traderId_fkey" FOREIGN KEY ("traderId") REFERENCES "Trader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HideoutReqTrader" ADD CONSTRAINT "HideoutReqTrader_hideoutStationId_fkey" FOREIGN KEY ("hideoutStationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerHasHideout" ADD CONSTRAINT "PlayerHasHideout_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerHasHideout" ADD CONSTRAINT "PlayerHasHideout_hideoutStationId_fkey" FOREIGN KEY ("hideoutStationId") REFERENCES "HideoutStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskOnMap" ADD CONSTRAINT "TaskOnMap_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskOnMap" ADD CONSTRAINT "TaskOnMap_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqKey" ADD CONSTRAINT "TaskReqKey_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqKey" ADD CONSTRAINT "TaskReqKey_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskRewardsItem" ADD CONSTRAINT "TaskRewardsItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskRewardsItem" ADD CONSTRAINT "TaskRewardsItem_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqItem" ADD CONSTRAINT "TaskReqItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskReqItem" ADD CONSTRAINT "TaskReqItem_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskHasObjective" ADD CONSTRAINT "TaskHasObjective_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerHasTasks" ADD CONSTRAINT "PlayerHasTasks_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerHasTasks" ADD CONSTRAINT "PlayerHasTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
