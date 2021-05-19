import React, { useEffect } from 'react';
import {getUser} from '../src/graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';


const myUser = [
    {
        
            id:'u1',
            username:'ilatorbg',
            name:'Nail Garba',
            mainGym: 'NR1 Fitness',
            mainSport:'Bodybuilding',
            level: 'Advanced',
            following: 391,
            followers: 234,
            image:'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'
        
    }
]



export default myUser