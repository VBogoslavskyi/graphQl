import { RESTDataSource } from '@apollo/datasource-rest';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getAlbums() {
    return await this.get('albums');
  }

  async getAlbum(id: number) {
    return await this.get(`albums/${id}`);
  }

  async getPhotosByAlbumId(albumId: number) {
    return await this.get(`albums?albumId=${albumId}`);
  }

  async createAlbum(createAlbumInput: { title: string }) {
    return await this.post('albums', createAlbumInput);
  }

  async updateAlbum(id: number, updateAlbumInput: { title: string }) {
    return await this.put(`albums/${id}`, updateAlbumInput);
  }

  async deleteAlbum(id: number) {
    return await this.delete(`albums/${id}`);
  }
}
