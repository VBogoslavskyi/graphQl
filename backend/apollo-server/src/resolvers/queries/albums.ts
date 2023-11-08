const albums = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbums();
};

const album = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbum(args.id);
};

const albumPhotos = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getPhotosByAlbumId(album.id);
};

export { albums, album, albumPhotos };
