import { db } from "@db/index";
import { challenges } from "@db/index";

const data = [
  {
    title: "Reverse a String",
    description: "Write a function that reverses a string.",
    category: "strings" as const,
    difficulty: "easy" as const,
    starterCode: `function reverseString(str) {\n  // your code here\n}`,
  },
];

const seed =  async () => {
    console.log('🌱 Seeding challenges...');

    await db.insert(challenges).values(data).onConflictDoNothing();

    console.log(`✅ Seeded ${data.length} challenges`)
    process.exit(0);
}
