/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import AppNavigator from "./src/navigation";
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';
import Store from './src/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OfflineNotice from './src/component/OfflineNotice';


const App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const firebaseConfig = {
    apiKey: "AIzaSyCbCOUwttkFB2LpQsmf6i5vQTcVNTha5HM",
    authDomain: "discover-park-dev.firebaseapp.com",
    projectId: "discover-park-dev",
    storageBucket: "discover-park-dev.appspot.com",
    messagingSenderId: "523398701246",
    appId: "1:523398701246:web:7a3c178dd3e5fd8b5b7eef",
    measurementId: "G-P3S3XFFJW1",
    databaseURL: "https://discover-park-dev-default-rtdb.firebaseio.com"
  };
  useEffect(() => {
    firebase.initializeApp(firebaseConfig)

    const channel = new firebase.notifications.Android.Channel(
      'test-channel',
      '11212121',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('A natural description of the channel');
    firebase.notifications().android.createChannel(channel);
    checkPermission();
    createNotificationListeners();

  }, []);


  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log('fcmToken---11122 ' + fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log('FCM TOKEN--->>>11  ' + fcmToken)
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  };

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      this.getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };


  createNotificationListeners = () => {
    this.onUnsubscribeNotificaitonListener = firebase
      .notifications()
      .onNotification(notification => {
        notification.android.setChannelId('test-channel');

        const { data, title, body } = notification;
        const localNotification = new firebase.notifications.Notification({
          sound: 'sampleaudio',
          show_in_foreground: true,
        })
          .setSound('sampleaudio.wav')
          .setNotificationId(notification.notificationId)
          .setTitle(title)
          .setBody(body)
          .setData(data)
          .android.setChannelId('fcm_FirebaseNotifiction_default_channel') // e.g. the id you chose above
          //.android.setSmallIcon('@drawable/icon_liked') // create this icon in Android Studio
          .android.setColor('#000000') // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase
          .notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));
        const channel = new firebase.notifications.Android.Channel(
          'fcm_FirebaseNotifiction_default_channel',
          'Mechanify!',
          firebase.notifications.Android.Importance.High,
        )
          .setDescription('PaRx!')
          .setSound('sampleaudio.wav');
        firebase.notifications().android.createChannel(channel);
        //firebase.notifications().displayNotification();
        notification.android.setLargeIcon();
      });

    notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { data, title, body } = notificationOpen.notification;
        console.log(
          'onNotificationOpened was triggered on notification taped' +
          JSON.stringify(data)
        );

        // this.props.navigation.navigate('Home')
        // Alert.alert(
        //   'A new FCM message arrived!',
        //   title +
        //     '  ' +
        //     JSON.stringify(body) +
        //     '  ' +
        //     JSON.stringify(data) +
        //     '    ' +
        //     JSON.stringify(data.incidentId),
        // );

      });

    // const notificationOpen = firebase.notifications().getInitialNotification();
    // if (notificationOpen) {
    //   const {title, body} = notificationOpen.notification;
    //   console.log('getInitialNotification:');
    //   Alert.alert(title, body);
    // }

    my = firebase
      .notifications()
      .getInitialNotification()
      .then(notificationOpen => {
        if (notificationOpen) {
          const { title, body, data } = notificationOpen.notification;
          console.log('getInitialNotification:');
          console.log(
            'App is killed---> Title->' +
            title +
            'Body--->' +
            body +
            'Data-->' +
            data,
          );
          // this.props.navigation.navigate('MyBookings')

        }
      });
  };

  //  const backgroundStyle = {
  //    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={Store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <OfflineNotice />
        <AppNavigator />
      </Provider>

    </SafeAreaView>
  );
};


export default App;
