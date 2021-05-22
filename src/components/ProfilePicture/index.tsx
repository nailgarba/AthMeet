import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../ProfileScreenComponents';

export type ProfilePictureProps = {
    size?: number,
    user: UserType;
}

const ProfilePicture = ({ user, size = 50 }: ProfilePictureProps) => {
    const navigation = useNavigation();
    const id = user.id;
    const onClick = () => {
        navigation.navigate('OtherProfile', {
          userID:{id},
        })
      }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <Image
                source={{ uri: user?.image}}
                style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                }}
            />
        </TouchableWithoutFeedback>
    )
}
//source={{ uri: user.image }}

export default ProfilePicture;