import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Example field (placeholder)' })
  exampleField: string;
}
