import { Inter } from "next/font/google";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { open_sans } from "./ui/fonts";
import "@/app/ui/global.css";

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider
          session={session}
          className={`${open_sans.className}bg-[#FFF9EB]`}
        >
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
