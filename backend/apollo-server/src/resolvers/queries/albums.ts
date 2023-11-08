const albums = (album, args, { dataSources }, info) => {
  return dataSources.albumsAPI.getAlbums();
};

export { albums };
