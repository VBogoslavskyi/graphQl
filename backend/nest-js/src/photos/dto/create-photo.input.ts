import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
  @Field()
  title: string;

  @Field()
  url: string;

  @Field()
  thumbnailUrl: string;

  @Field()
  albumId: string;
}
