import { RESTDataSource } from '@apollo/datasource-rest';

export class PhotosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPhotos() {
    return await this.get('photos');
  }

  async getPhoto(id: number) {
    return await this.get(`photos/${id}`);
  }

  async createPhoto(createPhotoInput: { title: string; url: string, thumbnailUrl: string }) {
    return await this.post('photos', createPhotoInput);
  }

  async updatePhoto(id: number, updatePhotoInput: { title: string; url: string, thumbnailUrl: string }) {
    return await this.put(`photos/${id}`, updatePhotoInput);
  }

  async deletePhoto(id: number) {
    return await this.delete(`photos/${id}`);
  }
}
