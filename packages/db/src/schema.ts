import { pgTable, bigint, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: bigint('id', { mode: "number"}).primaryKey(),
    username: text("username").unique().notNull(),
    email:text("email").unique().notNull(),
    fullName: text("fullName"),
    createdAt: timestamp("createdAt").defaultNow()
})