"use server";

import { print } from "graphql";
import { redirect } from "next/navigation";
import { fetchGraphQL } from "../fetchGraphQL";
import { CREATE_USER_MUTATION } from "../gqlQueries";
import { SignUpFormState } from "../types/formState";
import { SignUpFormSchema } from "../zodSchemas/signupFormSchema";

export async function signUp(
  prevState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  const validatedFields = SignUpFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await fetchGraphQL(print(CREATE_USER_MUTATION), {
    input: {
      ...validatedFields.data,
    },
  });

  if (data.errors) {
    return {
      errors: {
        name: data.errors[0].message,
      },
      message: "Invalid Credentials",
    };
  }
  redirect("/auth/signin");
}
