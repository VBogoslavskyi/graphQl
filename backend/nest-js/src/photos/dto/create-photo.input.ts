import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  thumbnailUrl: string;

  @Field(() => ID)
  albumId: number;
}
