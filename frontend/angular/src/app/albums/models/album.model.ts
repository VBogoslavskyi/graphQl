export interface Album {
  id: number;
  title: string;
  imageUrl: string;
}

export interface AlbumParams {
  title: string;
  imageUrl: string;
}

export interface ConnectionInfo {
  page: number;
  pages: number;
  total: number;
}
