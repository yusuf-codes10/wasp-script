CREATE TYPE "difficulty" AS ENUM ('easy', 'medium', 'hard', 'legendary');
CREATE TYPE "category" AS ENUM (
	'arrays',
	'strings',
	'functions',
	'closures',
	'async',
	'dom',
	'objects',
	'misc'
);
CREATE TABLE "challenges" (
	"id" bigint PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"difficulty" "difficulty" NOT NULL,
	"category" "category" NOT NULL,
	"startCode" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "challenges_title_unique" UNIQUE("title")
);