/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          nextToken
        }
        followers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      postID
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
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      postID
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      postID
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
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
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
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
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
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
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
        items {
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
        nextToken
      }
      followers {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
