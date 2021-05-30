/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      posts {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      mainGym
      mainSport
      level
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      followInfo {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followed {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followers {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      image
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          userID
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      postID
      post {
        id
        content
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        image
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followed {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      followers {
        id
        username
        name
        email
        image
        posts {
          nextToken
        }
        mainGym
        mainSport
        level
        chatRoomUser {
          nextToken
        }
        followInfo {
          id
          userID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followed {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        followers {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          username
          name
          email
          image
          mainGym
          mainSport
          level
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        postID
        post {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
