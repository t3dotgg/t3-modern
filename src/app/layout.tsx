import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs/app-beta";

export const metadata = {
  title: "Create T3 Modern",
  description: "Theo got bored again",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
