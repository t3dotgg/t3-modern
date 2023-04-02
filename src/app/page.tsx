import { Inter } from "next/font/google";
import { UserButton, currentUser } from "@clerk/nextjs/app-beta";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const user = await currentUser();

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
    </main>
  );
}
