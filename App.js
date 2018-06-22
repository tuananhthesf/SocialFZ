import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/LoginScreen';
import Post from './screens/PostsList';
import PostDetail from './screens/PostDetail';
import CreateNewPost from './screens/CreateNewPost';

import {createStackNavigator} from 'react-navigation';

const MyNavigation = createStackNavigator({
  Home: {
      screen: Login
  },
  Post: {
      screen: Post
  },
  PostDetail: {
      screen: PostDetail
  },
  CreateNewPost: {
      screen: CreateNewPost
  }
});

export default MyNavigation;
