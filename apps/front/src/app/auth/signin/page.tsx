import Link from "next/link";
import SignInForm from "./_components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="bg-white p-8 rounded-md shadow-md w-96 flex flex-col justify-center items-center">
      <h2 className="text-center text-2xl font-bold mb-4">Sign In Page</h2>
      <SignInForm />
      <div>
        <Link className="underline" href={"/auth/forgot-password"}>
          Forgot Password
        </Link>
      </div>
    </div>
  );
}
