import { db } from "@/db";
import { randomNumber } from "@/db/schema";
import { SignInButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

async function RandomNumbers() {
  const data = await db.query.randomNumber.findMany({
    orderBy: desc(randomNumber.id),
  });

  if (data.length === 0)
    return (
      <div className="text-2xl">
        Click the button above to generate some numbers
      </div>
    );

  return (
    <div className="flex max-w-sm flex-col gap-2 text-center">
      <div className="pb-4 text-2xl">
        Here are some random numbers stored in your DB:
      </div>

      {data.map((rn) => (
        <div key={rn.id} className="flex justify-between">
          <span>{rn.number}</span>

          <form
            action={async () => {
              "use server";
              await db.delete(randomNumber).where(eq(randomNumber.id, rn.id));
              revalidatePath("/");
            }}
            className="flex flex-col items-center"
          >
            <button
              type="submit"
              className="rounded bg-red-200 p-2 font-extrabold text-black"
            >
              X
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

async function addRandomNumber() {
  "use server";
  const update = await db
    .insert(randomNumber)
    .values({ number: Math.floor(Math.random() * 100000).toString() });

  revalidatePath("/");
  return update;
}

function CreateNewNumberForm() {
  return (
    <form action={addRandomNumber} className="flex flex-col items-center">
      <button
        type="submit"
        className="rounded border-2 bg-green-700 p-2 px-4 hover:bg-green-600"
      >
        Create New Number
      </button>
    </form>
  );
}

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <CreateNewNumberForm />
        <RandomNumbers />
      </SignedIn>
    </div>
  );
}
