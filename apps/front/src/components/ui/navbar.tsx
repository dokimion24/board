import Link from "next/link";
import { PropsWithChildren } from "react";
type Props = PropsWithChildren;

export default function Navbar(props: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold p-2">Blod</h1>
      <div className="flex gap-2 ml-auto">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </>
  );
}
