import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

import * as schema from "./schema";

// create the connection
const connection = connect({
  url: process.env["DATABASE_URL"],
});

export const db = drizzle(connection, { schema });
