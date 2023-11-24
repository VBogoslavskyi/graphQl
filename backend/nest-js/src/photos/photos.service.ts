import { Injectable } from '@nestjs/common';
import { CreatePhotoInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(@InjectRepository(PhotoEntity) private photoRepository: Repository<PhotoEntity>) {}
  async create(createPhotoInput: CreatePhotoInput): Promise<PhotoEntity> {
    return this.photoRepository.save(createPhotoInput);
  }
}
