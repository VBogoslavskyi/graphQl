const photo = (photo, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhoto(args.id);
};

const photos = (photo, args, { dataSources }, info) => {
  return dataSources.photosAPI.getPhotos();
};

export { photo, photos };
