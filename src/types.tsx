export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewPost: undefined;
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
  postedAt: string,
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