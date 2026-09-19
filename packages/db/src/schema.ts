import { pgTable, bigint } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
    id: bigint('id', { mode: "number"}).primaryKey()
})