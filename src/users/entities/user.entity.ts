import { ObjectType, Field, HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @HideField()
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @HideField()
  password: string;
}
