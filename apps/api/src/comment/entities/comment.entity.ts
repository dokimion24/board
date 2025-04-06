import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => User)
  author: User;

  @Field(() => Post)
  post: Post;

  @Field()
  createdAt: Date;
}
