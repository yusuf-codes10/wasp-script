import {
  pgTable,
  bigserial,
  bigint,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

const categoryEnum = pgEnum("category", [
  "arrays",
  "strings",
  "functions",
  "closures",
  "async",
  "dom",
  "objects",
  "misc", // gotta check out later
]);

const difficultyEnum = pgEnum("difficulty", [
  "easy",
  "medium",
  "hard",
  "legendary",
]);

export const users = pgTable("users", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  fullName: text("fullName"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const challenges = pgTable("challenges", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  title: text("title").unique().notNull(),
  description: text("description").notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  category: categoryEnum("category").notNull(),
  startCode: text("startCode").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const userProgress = pgTable("userProgress", {
  userId: bigint("userId", { mode: "number" })
    .notNull()
    .references(() => users.id),
  challengeId: bigint("challengeId", { mode: "number" })
    .notNull()
    .references(() => challenges.id),
  completedAt: timestamp("completedAt").defaultNow(),
});
