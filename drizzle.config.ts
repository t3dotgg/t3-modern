import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

// const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } =
//   process.env;

// // Generated connectionString so you don't have to put it in your env separately
// const connectionString = `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?ssl={"rejectUnauthorized":true}`;

export default {
  schema: "./src/db/schema.ts",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
