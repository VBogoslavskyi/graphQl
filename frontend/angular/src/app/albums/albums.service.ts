import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Album, AlbumParams, ConnectionInfo } from 'src/app/albums/models';
import { Apollo } from 'apollo-angular';
import { CREATE_ALBUM } from './graphql/mutation-create-album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private apollo: Apollo) {}
  queryAlbumsPaginated(page = 1, pageSize = 10): Observable<{ data: Album[]; info: ConnectionInfo }> {
    // TODO
    return of({
      data: [
        {
          id: 1,
          title: 'quidem molestiae enim',
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
        {
          id: 2,
          title: 'sunt qui excepturi placeat culpa',
          imageUrl: 'https://via.placeholder.com/600/24f355',
        },
      ],
      info: { page: 1, pages: 1, total: 2 },
    });
  }

  queryAlbum(id: number): Observable<{ album: Album; loading: boolean }> {
    // TODO
    return of({
      album: {
        id: 3,
        title: 'qui fuga est a eum',
        imageUrl: 'https://via.placeholder.com/600/56a8c2',
      },
      loading: false,
    });
  }

  createAlbum(albumParams: AlbumParams): Observable<Album | undefined> {
    return this.apollo
      .mutate<{ __typename: string; createAlbum: Album }>({
        mutation: CREATE_ALBUM,
        variables: {
          createAlbum: { ...albumParams },
        },
      })
      .pipe(map(({ data }) => data?.createAlbum));
  }

  updateAlbum(id: number, albumParams: AlbumParams): Observable<Album | undefined> {
    // TODO
    return of({
      id: 3,
      title: 'qui fuga est a eum',
      imageUrl: 'https://via.placeholder.com/600/56a8c2',
    });
  }

  removeAlbum(id: number): Observable<Album | undefined> {
    // TODO
    return of({
      id: 3,
      title: 'qui fuga est a eum',
      imageUrl: 'https://via.placeholder.com/600/56a8c2',
    });
  }
}
