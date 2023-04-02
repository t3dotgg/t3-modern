import type { Config } from "drizzle-kit";
import d from "dotenv";
d.config();
d.config({ path: `.env.local`, override: true });

export default {
  schema: "./src/db/schema.ts",
  connectionString: process.env.DB_URL,
} satisfies Config;
