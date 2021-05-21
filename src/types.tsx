export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  PrivateMessages: undefined;
  PrivateMessagesList: undefined;
  EditProfile: undefined;
  AthleteFinderFilter: undefined;
  OtherProfile: undefined;
  Profile: undefined;
  ChatRoom: undefined;
  NewPost: undefined;
  Home: undefined;
  
};


export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Messages: undefined;
  Search: undefined;
  AthleteFinder: undefined;

};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};
export type SearchNavigatorParamList = {
  SearchScreen: undefined;
};
export type AthleteFinderNavigatorParamList = {
  AthleteFinderScreen: undefined;
};
export type ProfileNavigatorParamList = {
  ProfileScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
  mainSport: string,
  mainGym: string,
  level: string,
  following: number,
  followers: number,

}


export type PostType = {
  id: string,
  user: UserType,
  createdAt: string,
  content: string,
  image?: string,
  numberOfLikes?: number,
}

export type ProfileType = {
  id: string,
  user: UserType,
  mainSport: string,
  mainGym: string,
  level: string,
  image?: string,
}
export type ChatRoom = {
  id: string;
  users: UserType[];
  lastMessage: Message;
}
export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: UserType;
  post?: PostType;
}