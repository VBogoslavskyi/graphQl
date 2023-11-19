import { postDeleted } from './subscriptions';
import { createPost, updatePost, deletePost, createComment, updateComment, deleteComment, createAlbum, createPhoto, updateAlbum, updatePhoto, deleteAlbum, deletePhoto } from './mutations';
import {
  posts,
  postsPaginated,
  postComments,
  post,
  postAuthor,
  authors,
  author,
  authorAlbums,
  authorAddress,
  authorsByCity,
  comments,
  albums,
  album,
  albumPhotos,
  photo,
  photos,
} from './queries';

export default {
  Query: {
    posts,
    post,
    postsPaginated,
    comments,
    authors,
    author,
    authorsByCity,
    albums,
    album,
    photo,
    photos,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
    createComment,
    updateComment,
    deleteComment,
    createAlbum,
    createPhoto,
    updateAlbum,
    updatePhoto,
    deleteAlbum,
    deletePhoto
  },
  Subscription: {
    postDeleted: {
      subscribe: postDeleted,
    },
  },
  Post: {
    author: postAuthor,
    comments: postComments,
  },
  Author: {
    address: authorAddress,
    albums: authorAlbums,
  },
  Album: {
    photos: albumPhotos,
  },
};
