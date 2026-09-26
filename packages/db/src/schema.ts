import {
  pgTable,
  bigserial,
  bigint,
  text,
  timestamp,
  jsonb,
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

type TestCase = {
  input: string | number | boolean | unknown[] | Record<string, unknown> | null;
  expected: string | number | boolean | unknown[] | Record<string, unknown> | null;
  key?: string;      // for sortByKey, groupBy
  target?: number;   // for findPairs
}

export const users = pgTable("users", {
  id: bigint("id", { mode: "number" }).primaryKey(),
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
  testCases: jsonb('testCases').notNull().$type<TestCase[]>(),
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
