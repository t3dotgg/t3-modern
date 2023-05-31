// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

// declaring enum in database
export const randomNumber = mysqlTable(
  "random_numbers",
  {
    id: serial("id").primaryKey(),
    number: varchar("number", { length: 256 }),
  },
  (randomNumber) => ({
    numberIndex: uniqueIndex("number_idx").on(randomNumber.number),
  })
);
