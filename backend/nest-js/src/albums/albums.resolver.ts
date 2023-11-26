import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { AlbumEntity } from './entities';
import { CreateAlbumInput } from './dto';

@Resolver()
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}
  @Mutation(() => AlbumEntity)
  createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput): Promise<AlbumEntity> {
    return this.albumsService.create(createAlbumInput);
  }
}
