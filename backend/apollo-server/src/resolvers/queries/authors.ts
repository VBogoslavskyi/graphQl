import { getAuthorAddress, getAuthorsByCity } from '../../data';

const authors = (author, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAuthors();
};

const author = (author, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAuthorById(args.id);
};

const authorAlbums = (author, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAlbumsByUserId(author.id);
};

const authorAddress = (author, args, { dataSources }, info) => {
  return getAuthorAddress(author.id);
};

const authorsByCity = (author, args, { dataSources }, info) => {
  return getAuthorsByCity(args.city);
};

export { authors, author, authorAlbums, authorAddress, authorsByCity };
