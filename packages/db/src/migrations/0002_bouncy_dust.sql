CREATE TABLE "userProgress" (
	"userId" bigint NOT NULL,
	"challengeId" bigint NOT NULL,
	"completedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE SEQUENCE IF NOT EXISTS challenges_id_seq OWNED BY challenges.id;
ALTER TABLE "challenges" ALTER COLUMN "id" SET DEFAULT nextval('challenges_id_seq');
--> statement-breakpoint
CREATE SEQUENCE IF NOT EXISTS users_id_seq OWNED BY users.id;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
--> statement-breakpoint
ALTER TABLE "userProgress" ADD CONSTRAINT "userProgress_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userProgress" ADD CONSTRAINT "userProgress_challengeId_challenges_id_fk" FOREIGN KEY ("challengeId") REFERENCES "public"."challenges"("id") ON DELETE no action ON UPDATE no action;