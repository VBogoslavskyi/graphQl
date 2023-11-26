import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from './entities';
import { AlbumsResolver } from './albums.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity])],
  providers: [AlbumsResolver, AlbumEntity],
})
export class AlbumsModule {}
