import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => String)
  password: string;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  avatar?: string;
}
