import React from 'react';
import { useEffect, useState } from 'react';

import { Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../ProfileScreenComponents';
import {Storage } from 'aws-amplify';
export type ProfilePictureProps = {
    size?: number,
    user: UserType;
    image?: string,
}


//Touching profile picture navigates to User's profile page
const ProfilePicture = ({ user, size = 50 }: ProfilePictureProps) => {
    const navigation = useNavigation();
    const id = user.id;
    const onClick = () => {
        navigation.navigate('OtherProfile', {
          userID:{id},
        })
      }
      const [url, setURL] = useState(user?.image);
      const geturl = async () => {
          const signedURL = await Storage.get(user?.image);
          setURL(signedURL);
      }
      geturl();


    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <Image
                source={{ uri: url}}
                style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                    margin:3,
                }}
            />
        </TouchableWithoutFeedback>
    )
}
//source={{ uri: user.image }}

export default ProfilePicture;