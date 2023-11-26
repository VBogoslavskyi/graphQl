import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from './entities';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsService } from './albums.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumEntity])],
  providers: [AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}
