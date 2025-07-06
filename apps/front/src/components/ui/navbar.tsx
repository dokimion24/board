import { getSession } from "@/lib/session";
import Link from "next/link";
import { PropsWithChildren } from "react";
import SignInPanel from "../sign-in-pannel";
type Props = PropsWithChildren;

export default async function Navbar(props: Props) {
  const session = await getSession();
  return (
    <>
      <h1 className="text-2xl font-bold p-2">Blod</h1>
      <div className="flex gap-2 ml-auto">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        {session && session.user ? (
          <Link href="/api/auth/signout">Logout</Link>
        ) : (
          <SignInPanel />
        )}
      </div>
    </>
  );
}
