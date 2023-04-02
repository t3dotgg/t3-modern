import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { Client } from "@planetscale/database";
import { people } from "./schema";

const {
  DATABASE_HOST: host,
  DATABASE_USERNAME: username,
  DATABASE_PASSWORD: password,
} = process.env;

if (!host || !username || !password) {
  throw new Error("Some of env variables are missing");
}
const client = new Client({
  fetch,
  host,
  username,
  password,
});

const connection = client.connection();
const db = drizzle(connection);

export const main = async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });

  const result = await db
    .insert(people)
    .values({ name: "John Wick", age: 58, occupation: "housekeeper" });
  console.log(result);
};
