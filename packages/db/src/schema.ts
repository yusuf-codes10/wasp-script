import { pgTable, bigint, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

const categoryEnum = pgEnum('category', [
    'arrays',
    'strings',
    'functions',
    'closures',
    'async',
    'dom',
    'objects',
    'misc' // gotta check out later
])

export const users = pgTable("users", {
    id: bigint('id', { mode: "number"}).primaryKey(),
    username: text("username").unique().notNull(),
    email:text("email").unique().notNull(),
    fullName: text("fullName"),
    createdAt: timestamp("createdAt").defaultNow()
})

export const challenges = pgTable('challenges', {
    id: bigint('id', { mode: "number"}).primaryKey(),
    title: text('title').unique().notNull(),
    description: text('description').notNull(),
    difficulty: text('difficulty').notNull(),
    category: categoryEnum('category').notNull(),
});