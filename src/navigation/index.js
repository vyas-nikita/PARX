import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, StackActions } from '@react-navigation/native';
import { View, useWindowDimensions, TouchableOpacity, Text, Image } from 'react-native';
import {
  SplashScreen,
  SplashEnd, Welcome,
  Signin,
  Register,
  ForgotPassword,
  ForgotPasswordVerify,
  ForgotPasswordSet,
  Home,
  Explore,
  Graph,
  Timer,
  Settings,
  ChangePassword,
  ChangePasswordSet,
  TermsCondition,
  UserPre,
  Feedback,
  AboutApp,
  StpTimer,
  RecordMood,
  FinalScreen,
  PrivacyPolicy,
  ParkDetail,
  GraphTimeList
} from '../view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { BADTree, BAGraph, BAHome, BATimer, BDGraph, BDHome, BATree } from '@images'
import Constants from '../assets/constants';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,

};


function AppNavigator() {
 
 
  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator headerMode={"none"} initialRouteName={"SplashScreen"}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SplashEnd" component={SplashEnd} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPasswordVerify" component={ForgotPasswordVerify} />
        <Stack.Screen name="ForgotPasswordSet" component={ForgotPasswordSet} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ChangePasswordSet" component={ChangePasswordSet} />
        <Stack.Screen name="TermsCondition" component={TermsCondition} />
        <Stack.Screen name="UserPre" component={UserPre} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="StpTimer" component={StpTimer} />
        <Stack.Screen name="RecordMood" component={RecordMood} />
        <Stack.Screen name="FinalScreen" component={FinalScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="ParkDetail" component={ParkDetail} />
        <Stack.Screen name="GraphTimeList" component={GraphTimeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function MainMenu() {
//   const dimensions = useWindowDimensions();
//   const drawerType = dimensions.width >= 700 ? 'permanent' : 'front'
//   return (
//     <Drawer.Navigator initialRouteName="Home"
//       drawerType={drawerType}
//       edgeWidth={100}
//       drawerContent={(props) => <CustomDrawer {...props} />}
//     >
//       <Drawer.Screen name="Home" component={BottomNavigation} />
//     </Drawer.Navigator>
//   )
// }
function BottomNavigation() {
  return (


    <Tab.Navigator screenOptions={{
      swipeEnabled: true,
      animationEnabled: true,
      gestureEnabled: true,
      headerShown: false
    }}
      tabBarOptions={{
        activeTintColor: Constants.APP_COLOR.TEXT_GREEN,
        inactiveTintColor: Constants.APP_COLOR.UNACTIVE_TEXT,
        labelStyle: {
          fontSize: 14,
          fontFamily: Constants.APP_FONTS.REGULAR
        },
        style: {
          backgroundColor: '#ffff',
          height: 70,

        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={focused ? BAHome : BDHome}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
              }}
            />
        }} />
      <Tab.Screen name="Explore" component={TreeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={focused ? BATree : BADTree}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
              }}
            />
        }} />
      <Tab.Screen name="Journal" component={GraphStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={focused ? BAGraph : BDGraph}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
              }}
            />
        }} />
      <Tab.Screen name="Timer" component={TimerStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <Image
              source={focused ? BATimer : BATimer}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
              }}
            />
        }} />

    </Tab.Navigator>


  );
}
function HomeStack() {

  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>

      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
}

function TimerStack() {

  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>

      <Stack.Screen name="Timer" component={Timer} />

    </Stack.Navigator>
  );
}

function GraphStack() {

  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>

      <Stack.Screen name="Graph" component={Graph} />

    </Stack.Navigator>
  );
}

function TreeStack() {

  return (
    <Stack.Navigator headerMode={"none"} initialRouteName={"Home"}>

      <Stack.Screen name="Explore" component={Explore} />


    </Stack.Navigator>
  );
}


export default AppNavigator;
