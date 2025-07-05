"use client";

import SubmitButton from "@/components/submit-button";
import { signIn } from "@/lib/actions/auth";
import { useActionState } from "react";
import { Input } from "starkds-ui/Input";

const SignInForm = () => {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action} className="flex flex-col gap-2">
      {!!state?.message && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}
      <div>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          error={!!state?.errors?.email}
          helperText={state?.errors?.email?.[0]}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          error={!!state?.errors?.password}
          helperText={state?.errors?.password?.[0]}
        />
        <SubmitButton>Sign In</SubmitButton>
      </div>
    </form>
  );
};

export default SignInForm;
