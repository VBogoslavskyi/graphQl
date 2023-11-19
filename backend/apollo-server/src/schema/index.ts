export default `#graphql
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type Photo {
    id: ID!
    title: String
    url: String
    thumbnailUrl: String
  }

  type Album {
    id: ID!
    title: String
    photos: [Photo]
  }

  type Post {
    id: ID!
    title: String
    body: String
    comments: [Comment]
    author: Author
  }

  type PostConnection {
    data: [Post]
    info: ConnectionInfo
  }

  type ConnectionInfo {
    page: Int!
    total: Int
    pages: Int
  }

  type Comment {
    id: ID!
    postId: ID!
    name: String
    email: String
    body: String
  }

  type Author {
    id: ID!
    name: String
    username: String
    email: String
    address: Address,
    albums: [Album]
  }

  type Address {
    street: String
    suite: String
    city: City
    zipcode: String
  }

  enum City {
    LVIV
    KYIV
    DNIPRO
  }

  type Query {
    albums: [Album]
    album(id: Int!): Album
    photos: [Photo]
    photo(id: Int!): Photo
    posts: [Post]
    post(id: Int!): Post
    postsPaginated(page: Int = 1, pageSize: Int = 5): PostConnection!
    comments: [Comment]
    authors: [Author]
    author(id: ID!): Author
    authorsByCity(city: City!): [Author]
  }

  type Mutation {
    createPost(createPostInput: CreatePostInput!): Post
    updatePost(id: Int!, updatePostInput: UpdatePostInput!): Post
    deletePost(id: Int!): Boolean
    createComment(postId: ID!, createCommentInput: CreateCommentInput!): Comment
    updateComment(id: ID!, updateCommentInput: UpdateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
    createPhoto(createPhotoInput: CreatePhotoInput!): Photo
    updatePhoto(id: Int!, updatePhotoInput: UpdatePhotoInput!): Photo
    deletePhoto(id: Int!): Boolean
    createAlbum(createAlbumInput: CreateAlbumInput!): Album
    updateAlbum(id: Int!, updateAlbumInput: UpdateAlbumInput!): Album
    deleteAlbum(id: Int!): Boolean
  }

  type Subscription {
    postDeleted: Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input CreatePhotoInput {
    title: String!
    url: String!
    thumbnailUrl: String!
  }

  input UpdatePhotoInput {
    title: String!
    url: String!
    thumbnailUrl: String!
  }

  input CreateAlbumInput {
    title: String!
  }
  
  input UpdateAlbumInput {
    title: String!
  }


input UpdatePostInput {
    title: String!
    body: String!
  }

  input CreateCommentInput {
    name: String!
    email: String!
    body: String!
  }

  input UpdateCommentInput {
    name: String
    email: String
    body: String
  }
`;
