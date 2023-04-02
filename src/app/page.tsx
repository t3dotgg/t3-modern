import { Inter } from "next/font/google";
import { UserButton, currentUser } from "@clerk/nextjs/app-beta";
import Link from "next/link";
import { db } from "~/db";
import { people } from "~/db/schema";
import { Button } from "./button";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const user = await currentUser();

  const peopleFromDb = await db.select().from(people);

  console.log("people", peopleFromDb);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!user && (
        <div className="text-xl font-bold">
          <Link href="/sign-in">Sign In</Link>
        </div>
      )}

      {user && (
        <div className="flex items-center gap-2 text-xl font-bold">
          <div>Hello {user.firstName}</div>
          <UserButton />
        </div>
      )}
      <div className="flex flex-col">
        {peopleFromDb.map((person) => {
          return <div key={person.id}>{`${person.id} - ${person.name}`}</div>;
        })}
      </div>

      <Button />
    </main>
  );
}
