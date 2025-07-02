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
          label="이름"
          name="name"
          placeholder="이름을 입력하세요"
          error={!!state?.errors?.name}
        />
      </div>
      <div>
        <Input
          label="Email"
          name="email"
          placeholder="john@example.com"
          error={!!state?.errors?.email}
        />
      </div>
      <div>
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          error={!!state?.errors?.password}
        />
      </div>
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
