import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PhotoEntity } from './entities';
import { CreatePhotoInput } from './dto';
import { PhotosService } from './photos.service';

@Resolver()
export class PhotosResolver {
  constructor(private readonly photosService: PhotosService) {}
  @Mutation(() => PhotoEntity)
  createPhoto(@Args('createPhotoInput') createPhotoInput: CreatePhotoInput): Promise<PhotoEntity> {
    return this.photosService.create(createPhotoInput);
  }
}
