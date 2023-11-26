import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from './entities';
import { Repository } from 'typeorm';
import { CreateAlbumInput } from './dto';

@Injectable()
export class AlbumsService {
  constructor(@InjectRepository(AlbumEntity) private albumRepository: Repository<AlbumEntity>) {}

  async create(createAlbumInput: CreateAlbumInput): Promise<AlbumEntity> {
    return this.albumRepository.save(createAlbumInput);
  }
}
