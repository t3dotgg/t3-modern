import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

const TopNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <nav className="container mx-auto flex justify-between px-4 py-4">
          <span className="text-2xl font-bold">T3 Future</span>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
      <main className="container mx-auto flex-grow px-4 py-8">{children}</main>
    </div>
  );
};

export default TopNavLayout;
