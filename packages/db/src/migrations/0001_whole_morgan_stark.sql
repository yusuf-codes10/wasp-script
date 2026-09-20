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
