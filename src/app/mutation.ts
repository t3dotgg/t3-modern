"use server";

import { zact } from "zact/server";
import z from "zod";
import { db } from "~/db";
import { people } from "~/db/schema";

export const addUser = zact(z.object({ name: z.string().min(3) }))(
  async ({ name }) => {
    console.log("called with name", name);

    return await db.insert(people).values({ name });
  }
);
