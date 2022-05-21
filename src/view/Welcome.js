
import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions, ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { PagerEndImg, WelcomeBg } from '@images';
import Constants from '../assets/constants';
import { AppThemeButton } from '../component/Buttons';



export default function Welcome({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])


  return (
    <ImageBackground style={styles.container}
      resizeMode="stretch"
      source={WelcomeBg}>
      <View style={{ flex: 1, }}>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.title}>{Constants.APP_STRINGS.WELCOME_MSG}</Text>
          <Text style={styles.text}>{Constants.APP_STRINGS.WELCOME_TITLE}</Text>
        </View>
        <Animated.View                 // Special animatable View
          style={{
            position: 'absolute',
            bottom: 10,
            width: Dimensions.get('window').width - 50,
            alignSelf: 'center',
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          <AppThemeButton title={Constants.APP_STRINGS.CRAETE_ACCOUNT}
            onPressButton={() => {
              navigation.navigate("Register")
            }}
            style={styles.buttonCStyle}
            textSyle={styles.buttonText} />
          <AppThemeButton title={Constants.APP_STRINGS.SIGN_IN}
            onPressButton={() => {
              navigation.navigate("Signin")
            }}
            style={styles.buttonStyle}

            textSyle={styles.buttonSText} />
        </Animated.View>
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
  buttonText: {
    fontFamily: Constants.APP_FONTS.C_BOLD,
    color: Constants.APP_COLOR.TEXT_GREEN,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize:16
  },
  buttonSText: {
    fontFamily: Constants.APP_FONTS.C_BOLD,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize:16
  },
  buttonStyle: {
    backgroundColor: 'white',
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    borderColor: 'rgba(255,255,255, 0.2)',
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 40,
    width: Dimensions.get('window').width - 50,
  },
  buttonCStyle: {
    backgroundColor: Constants.APP_COLOR.TEXT_GREEN,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginLeft: 20,
    position: 'absolute',
    bottom: 120,
    width: Dimensions.get('window').width - 50,
  },
  text: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 40,
    textAlign: 'center',
    paddingRight: 40
  },
  textRight: {
    fontFamily: Constants.APP_FONTS.REGULAR,
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 30,
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontFamily: 'OpenSans-Bold',
    color: Constants.APP_COLOR.TEXT_GREEN
  },
  textLeft: {
    fontFamily: Constants.APP_FONTS.REGULAR,
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
    fontFamily: Constants.APP_FONTS.C_REGULAR,
    color: Constants.APP_COLOR.TEXT_GREEN,
    fontSize: 36,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    marginTop: 50
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