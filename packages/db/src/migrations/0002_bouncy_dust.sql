CREATE TABLE "userProgress" (
	"userId" bigint NOT NULL,
	"challengeId" bigint NOT NULL,
	"completedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "challenges" ALTER COLUMN "id" SET DATA TYPE bigserial;
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE bigserial;
ALTER TABLE "userProgress" ADD CONSTRAINT "userProgress_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userProgress" ADD CONSTRAINT "userProgress_challengeId_challenges_id_fk" FOREIGN KEY ("challengeId") REFERENCES "public"."challenges"("id") ON DELETE no action ON UPDATE no action;