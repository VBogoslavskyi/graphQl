import { gql } from 'apollo-angular';

export const CREATE_ALBUM = gql`
  mutation createAlbum($createAlbum: CreateAlbumInput!) {
    createAlbum(createAlbumInput: $createAlbum) {
      id
      title
      imageUrl
      __typename
    }
  }
`;
