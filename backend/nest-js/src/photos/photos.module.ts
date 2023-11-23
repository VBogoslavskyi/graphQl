import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoEntity])],
  providers: [],
})
export class PhotosModule {}
