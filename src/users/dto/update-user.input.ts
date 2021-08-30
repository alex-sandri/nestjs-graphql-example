import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field(() => String)
  @IsOptional()
  name?: string;

  @Field(() => String)
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => String)
  @IsOptional()
  @MinLength(8)
  password?: string;
}
