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
query MyQuery {
    getUser(id: "22842985-8fa6-4f80-b113-98674b1b3f52") {
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