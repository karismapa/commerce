import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import History from '../screens/History';
import Profile from '../screens/Profile';
import SplashScreen from '../screens/SplashScreen';

const Tab = createBottomTabNavigator();
const HomeNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();
const MainNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Intro"
      component={Intro}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="HomeNav"
      component={HomeNavigation}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
