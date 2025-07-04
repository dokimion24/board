"use client";

import SubmitButton from "@/components/submit-button";
import { signUp } from "@/lib/actions/auth";
import { useActionState } from "react";
import { Input } from "starkds-ui/Input";

const SignUpForm = () => {
  const [state, action] = useActionState(signUp, undefined);
  return (
    <form action={action} className="flex flex-col gap-2">
      {!!state?.message && (
        <p className="text-red-500 text-sm">{state.message}</p>
      )}
      <div>
        <Input
          label="Name"
          name="name"
          placeholder="이름을 입력하세요"
          defaultValue={state?.data?.name}
          error={!!state?.errors?.name}
          helperText={state?.errors?.name?.[0]}
        />
      </div>
      <div>
        <Input
          label="Email"
          name="email"
          placeholder="john@example.com"
          error={!!state?.errors?.email}
          defaultValue={state?.data?.email}
          helperText={state?.errors?.email?.[0]}
        />
      </div>
      <div>
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          error={!!state?.errors?.password}
          defaultValue={state?.data?.password}
          helperText={state?.errors?.password?.[0]}
        />
      </div>
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
