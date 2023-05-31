// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import TopNavLayout from "./_components/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "T3 Future",
  description: "Project started by t3-future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopNavLayout>{children}</TopNavLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
