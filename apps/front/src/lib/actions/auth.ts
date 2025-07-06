"use server";

import { print } from "graphql";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchGraphQL } from "../fetchGraphQL";
import { CREATE_USER_MUTATION, SIGN_IN_MUTATION } from "../gqlQueries";
import { createSession } from "../session";
import { SignUpFormState } from "../types/formState";
import { LoginFormSchema } from "../zodSchemas/loginFormSchema";
import { SignUpFormSchema } from "../zodSchemas/signupFormSchema";

export async function signUp(
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data?.errors)
    return {
      data: Object.fromEntries(formData.entries()),
      message: "Something went wrong",
    };
  redirect("/auth/signin");
}

export async function signIn(
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success)
    return {
      data: Object.fromEntries(formData.entries()),
      errors: validatedFields.error.flatten().fieldErrors,
    };

  const data = await fetchGraphQL(print(SIGN_IN_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data?.errors) {
    return {
      data: Object.fromEntries(formData.entries()),
      message: "Invalid Credentials",
    };
  }

  await createSession({
    user: {
      id: data?.signIn?.id,
      name: data?.signIn?.name,
      avatar: data?.signIn?.avatar,
    },
    accessToken: data?.signIn?.accessToken,
  });
  revalidatePath("/");
  redirect("/");
}
