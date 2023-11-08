const albums = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbums();
};

const album = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbum(args.id);
};

export { albums, album };
