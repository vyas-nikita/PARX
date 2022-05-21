
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

import { PagerEndImg, PagerBg } from '@images';
import Constants from '../assets/constants';
import { AppThemeButton } from '../component/Buttons';



export default function SplashEnd({ navigation }) {
  return (
    <ImageBackground style={styles.container} source={PagerBg}>
      <View style={{ flex: 1, }}>

        <ImageBackground
          style={styles.imageView}
          resizeMode="stretch"
          source={PagerEndImg} >
          <Text style={styles.title}>{Constants.APP_STRINGS.PAGER_END_HEADING}</Text>
          <Text style={styles.text}>{Constants.APP_STRINGS.PAGER_END_TITLE}</Text>

          <AppThemeButton title={Constants.APP_STRINGS.START}
            onPressButton={() => {
              navigation.navigate("Welcome")
            }}
            style={{ color: Constants.APP_COLOR.TEXT_GREEN, backgroundColor: 'white', alignSelf: 'center', width: 250, position: 'absolute', bottom: 10 }} />

        </ImageBackground>

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
    backgroundColor: 'trasnparent'
  },
  container: {
    flex: 1,


  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 30,
    textAlign: 'center',
    paddingRight: 30,
    color:Constants.APP_COLOR.BALCK
  },
  textRight: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  }, textLeft: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'flex-start',
    paddingRight: 30,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  imageView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 100,
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontFamily: "Comfortaa-Bold",
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 24,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  paginationContainer: {
    bottom: 16,

  },
  paginationDots: {
    width: 'auto',
    height: 16,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,

    backgroundColor: '#E4E4E4'
  },
});