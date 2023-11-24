import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './entities';
import { PhotosResolver } from './photos.resolver';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  providers: [PhotosResolver, PhotosService],
})
export class PhotosModule {}
