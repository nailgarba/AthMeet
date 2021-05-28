export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
            id
            chatRoomUsers {
              items {
                user {
                  id
                  name
                  image
                  status
                }
              }
            }
            lastMessage {
              id
              content
              updatedAt
              user {
                id
                name
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;


export const listChatRooms = /* GraphQL */ `
query MyQuery($id: ID!) {
    getUser(id: $id) {
        chatRoomUser {
          items {
            chatRoomID
            id
            chatRoom {
              chatRoomUsers {
                items {
                  user {
                    id
                    name
                    image
                  }
                }
              }
              lastMessage {
                content
                id
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
    
  `;


  export const listPrivatePosts = /* GraphQL */ `
  query MyQuery($id: ID!) {
    listPosts(filter: {userID: {beginsWith: "22842985-8fa6-4f80-b113-98674b1b3f52"}}) {
      nextToken
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


export const getFollowers = /* GraphQL */ `
query getFollowers ($id: ID!){
  getUser(id: $id) {
    followers {
      items {
        id
        name
        username
        image
        level
        mainGym
        mainSport
        updatedAt
      }
    }
    id
    name
    username
    image
    level
    mainGym
    mainSport
  }
}`
;
  