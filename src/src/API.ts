/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  image?: string | null,
  mainGym?: string | null,
  mainSport?: string | null,
  level?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  mainGym?: ModelStringInput | null,
  mainSport?: ModelStringInput | null,
  level?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  name?: string,
  email?: string,
  image?: string | null,
  posts?: ModelPostConnection,
  following?: ModelUserConnection,
  followers?: ModelUserConnection,
  mainGym?: string | null,
  mainSport?: string | null,
  level?: string | null,
  chatRoomUser?: ModelChatRoomUserConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id?: string,
  content?: string,
  userID?: string,
  user?: User,
  image?: string | null,
  likes?: ModelLikeConnection,
  comments?: ModelCommentConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id?: string,
  userID?: string,
  postID?: string,
  user?: User,
  post?: Post,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  userID?: string,
  user?: User,
  postID?: string,
  post?: Post,
  content?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items?:  Array<ChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id?: string,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  chatRoom?: ChatRoom,
  createdAt?: string,
  updatedAt?: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id?: string,
  chatRoomUsers?: ModelChatRoomUserConnection,
  messages?: ModelMessageConnection,
  lastMessageID?: string,
  lastMessage?: Message,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  createdAt?: string,
  content?: string,
  userID?: string,
  chatRoomID?: string,
  user?: User,
  chatRoom?: ChatRoom,
  postID?: string | null,
  post?: Post,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
  mainGym?: string | null,
  mainSport?: string | null,
  level?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  content: string,
  userID: string,
  image?: string | null,
};

export type ModelPostConditionInput = {
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  content?: string | null,
  userID?: string | null,
  image?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  userID: string,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id?: string | null,
};

export type CreateChatRoomInput = {
  id?: string | null,
  lastMessageID: string,
};

export type ModelChatRoomConditionInput = {
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  lastMessageID?: string | null,
};

export type DeleteChatRoomInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  userID: string,
  chatRoomID: string,
  postID?: string | null,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
  postID?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  mainGym?: ModelStringInput | null,
  mainSport?: ModelStringInput | null,
  level?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input?: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input?: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input?: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input?: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input?: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input?: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input?: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input?: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input?: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id?: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id?: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id?: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostQueryVariables = {
  postID?: string | null,
  content?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostQuery = {
  commentsByPost?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID: string,
      post:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelUserConnection",
      items?:  Array< {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    mainGym?: string | null,
    mainSport?: string | null,
    level?: string | null,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    content: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    image?: string | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID: string,
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        lastMessageID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      postID?: string | null,
      post?:  {
        __typename: "Post",
        id: string,
        content: string,
        userID: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
      } | null,
      mainGym?: string | null,
      mainSport?: string | null,
      level?: string | null,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        postID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postID?: string | null,
    post?:  {
      __typename: "Post",
      id: string,
      content: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        mainGym?: string | null,
        mainSport?: string | null,
        level?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      image?: string | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};
