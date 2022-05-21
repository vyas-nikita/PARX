
import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions, ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { PagerBg, icForwardWhite } from '@images';

import Constants from '../assets/constants';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../component/Header';
import { AppThemeButton } from '../component/Buttons';
import MapView from 'react-native-maps';

export default function Timer({ navigation }) {

  return (

    <View style={{ flex: 1, }}>

      {/* <Text style={styles.title}>{Constants.APP_STRINGS.TIMER}</Text> */}

      <MapView
        style={{ height: 300, width: Dimensions.get("window").width }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.parkText}>Queen Elizabeth Park</Text>
        <Text style={styles.parkAddress}>2659 West Georgia Street</Text>

        <View style={styles.textVIew}>
          <Text style={styles.parkSubTitle}>{Constants.APP_STRINGS.REACH_GREEN}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonCStyle}
          onPress={() => [
            navigation.navigate("StpTimer")
          ]}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.buttonText}>{Constants.APP_STRINGS.START_TRACKING_GREEN}</Text>
            <Image style={{ marginRight: 20, alignSelf: 'center' }} source={icForwardWhite}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({


  textVIew: {
    backgroundColor: Constants.APP_COLOR.LIGHT_GREEN,
    height: 80,
    marginTop: 50,
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonStyle: {
    color: 'black',
    borderColor: Constants.APP_COLOR.GREEN_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,

    width: Dimensions.get('window').width - 50,
  },

  buttonCStyle: {
    color: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 50,
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontFamily: Constants.APP_FONTS.C_BOLD,
    fontSize: 16
  },
  flex: {
    flex: 1,
  },

  container: {
    alignContent: 'center',
    flex: 1,
    left: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 24,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  parkText: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.BALCK,
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },

  parkAddress: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.BALCK,
    fontSize: 12,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',

  },

  parkSubTitle: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    color: Constants.APP_COLOR.BALCK,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',

  },

});