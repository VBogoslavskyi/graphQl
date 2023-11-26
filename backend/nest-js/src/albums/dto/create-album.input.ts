import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field()
  title: string;

  @Field()
  imageUrl: string;
}
